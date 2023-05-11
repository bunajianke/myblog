---
title: 手写读懂 bind 方法
date: 2023/5/10
categories:
  - 前端
tags:
  - JavaScript
---

## bind 方法的定义
`bind()` 方法返回一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数作为新函数的参数，供调用使用。

使用方法 e.g.
```js
const Person = {
  name: 'xiaoming'
}

function sayName(greeting = 'hola') {
  console.log(greeting + ' ' + this.name)
}

const fn = sayName.bind(Person, 'hello')

fn() // Expected output: hello xiaoming
```

特点：
 1. 返回一个函数
 2. 可以传入参数

初步实现：
```js
Function.prototype.myBind = function (context, ...args) {
  // 调用 myBind 方法的函数
  // args： 调用 myBind 时传入的全部参数
  const self = this;

  // 返回一个函数
  return function(...bindArgs) {
    // 函数可以具备返回值
    return self.apply(context, [...args, ...bindArgs]);
  };
};
```

最终版（需要解析）：
```js
Function.prototype.myBind = function (context, ...args) {
  const self = this;

  const fNOP = function () {};
  const bound = function (...bindArgs) {
    return self.apply(
      // bind 出来的函数通过 new 实例化时，this 指定会失效，但传入的参数依然有效
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  fNOP.prototype = this.prototype;
  bound.prototype = new fNOP();
  return bound;
};
```