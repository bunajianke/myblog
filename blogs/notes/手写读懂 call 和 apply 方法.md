---
title: 手写读懂 call 和 apply 方法
date: 2023/5/8
categories:
  - 前端
tags:
  - JavaScript
---

## call 的使用方法
`call` 方法用于更改函数的 `this` 指向。
使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

### 没有参数时普通调用：
```js
const Person = {
  name: 'xiaoming'
}

function sayName(age) {
  console.log(age)
  return this.name
}

sayName.call(Person, 18) // Expected output: 18, xiaoming
```

### 有参数依次传入：
```js
const Person = {
  name: 'xiaomei'
}

function greeting(text = 'hola') {
  return text + ' ' + this.name
}

greeting.call(Person, 'hello') // Expected output: hello xiaomi
```

### 初步实现 myCall
```js
Function.prototype.myCall = function(context) {
  // this 指向调用 myCall 函数的对象或函数
  // 给传入的对象新增一个属性 fn 指向当前调用的对象或函数

  // 此时 this 就是 sayName 函数本身
  context.fn = this

  // 执行 fn 方法，等于执行了 sayName 方法，此时 sayName 的 this 指向 context 既 Person 对象，
  // 由此实现了 call 相同的功能
  context.fn()

  // 执行完删除 fn 方法
  delete context.fn
}

const Person = {
  name: 'xiaohua'
}

function sayName() {
  return this.name
}

sayName.myCall(Person) // Expected output: xiaohua
```
原理解析：对象的 this 指向它本身，给对象附加要更改 this 指向的方法，该方法的 this 就变成该对象。e.g.
```js
const obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  }
}

obj.b() // Expected output: 1
```

### 支持传入参数
```js
Function.prototype.myCall = function(context = window) {
  const fn = Symbol()
  // const args = Array.prototype.slice.call(arguments);
  const args = Array.from(arguments)
  context[fn] = this

  // 传递所有参数并运行
  const result = context[fn](args)
  delete context[fn]
  return result
}
```
### 实现解释
1. 在修改 `this` 指向时判断，如果 `context` 是 `null` 或 `undefined`，`this` 就指向 `window`。
2. 在创建 `fn` 属性时可能在 `context` 上本身就有一个 `fn`，所以使用 `Symbol()` 来保证用的是唯一值。

## apply 的使用方法
和 `call` 方法类似，不过传递的参数变成数组形式。

```js
sayName.apply(Person, [18]);
```

实现：
```js
Function.prototype.myApply = function (context, argArr) {
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](argArr);
  delete context[fn];
  return result;
};
```