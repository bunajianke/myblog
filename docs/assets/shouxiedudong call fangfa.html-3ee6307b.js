import{_ as n,p as s,q as a,Z as e}from"./framework-87c4c4c1.js";const t={},p=e(`<h2 id="call-的使用方法" tabindex="-1"><a class="header-anchor" href="#call-的使用方法" aria-hidden="true">#</a> call 的使用方法</h2><p><code>call</code> 方法用于更改函数的 <code>this</code> 指向。 使用一个指定的 <code>this</code> 值和单独给出的一个或多个参数来调用一个函数。</p><h3 id="没有参数时普通调用" tabindex="-1"><a class="header-anchor" href="#没有参数时普通调用" aria-hidden="true">#</a> 没有参数时普通调用：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaoming&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token function">sayName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span> <span class="token comment">// Expected output: xiaoming</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有参数依次传入" tabindex="-1"><a class="header-anchor" href="#有参数依次传入" aria-hidden="true">#</a> 有参数依次传入：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaomei&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">greeting</span><span class="token punctuation">(</span>text <span class="token operator">=</span> <span class="token string">&#39;hola&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> text <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token function">greeting</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Expected output: hello xiaomi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初步实现-mycall" tabindex="-1"><a class="header-anchor" href="#初步实现-mycall" aria-hidden="true">#</a> 初步实现 myCall</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this 指向调用 myCall 函数的对象或函数</span>
  <span class="token comment">// 给传入的对象新增一个属性 fn 指向当前调用的对象或函数</span>

  <span class="token comment">// 此时 this 就是 sayName 函数本身</span>
  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 执行 fn 方法，等于执行了 sayName 方法，此时 sayName 的 this 指向 context 既 Person 对象，</span>
  <span class="token comment">// 由此实现了 call 相同的功能</span>
  context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 执行完删除 fn 方法</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaohua&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

sayName<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span> <span class="token comment">// Expected output: xiaohua</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理解析：对象的 this 指向它本身，给对象附加要更改 this 指向的方法，该方法的 this 就变成该对象。e.g.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Expected output: 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持传入参数" tabindex="-1"><a class="header-anchor" href="#支持传入参数" aria-hidden="true">#</a> 支持传入参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// const args = Array.prototype.slice.call(arguments);</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 传递所有参数并运行</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现解释" tabindex="-1"><a class="header-anchor" href="#实现解释" aria-hidden="true">#</a> 实现解释</h3><ol><li>在修改this指向时判断，如果context是null或undefined，this就指向window。</li><li>在创建fn属性时可能在context上本身就有一个fn，所以使用Symbol()来保证用的是唯一值</li></ol>`,14),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","shouxiedudong call fangfa.html.vue"]]);export{r as default};
