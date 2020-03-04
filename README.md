# LinqJs

[![GitHub release](https://img.shields.io/github/release/wm123450405/linqjs.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![npm](https://img.shields.io/npm/dm/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![Travis branch](https://img.shields.io/travis/wm123450405/linqjs.svg)](https://travis-ci.org/wm123450405/linqjs)

Since 2.1.0, I rewrite all to use new features of ES6. The performance be better, memory is used less and using deferred execution.

对 JavaScript 中原生数组、对象进行扩展, 提供了一些对数据的操作方法.
包括对数组结构、树形结构、对象结构等数据进行 查询,排序,连接,合并,分组,分段,转换,遍历 等一系列功能.
可以用精炼和易懂的代码实现比较复杂的操作.

一开始,在 ES5 的时代,我觉得 js 对数组的操作实在太繁琐了. 可能正是这种繁琐才有了像 underscore 这样优秀的 js 库的出现.
我本不是做前端出身的,我觉得其他语言对于数组或列表的操作要比 js 好用很多,提供了大量的方法和功能. 于是最早参考的 C#中的功能实现了一些方法, 就有了1.0版本.
后来,ES6 发布并普及开来,js 原生数组也增加了很多好用的功能,但是这还远远不够.
于是我又翻出了我的代码用 ES6 重写, 有了2.1版本, 并发布至npm上. 这一次我又借鉴了另外一些语言中的部分特性, 比如 php.我想我后面可能再会添加一些其他语言或框架类似的功能,比如 Java,Python 等.
后来我在 stackoverflow 中看到很多人对于树形结构的操作提了很多的问题,我像我的工具包应该要可以为他们提供帮助.于是在最新的几个版本中我加入了对树形结构的一些操作.


[帮助文档(完善中)](http://wm123450405.oschina.io/linqjs/#/zh-cn) :+1:

[Documentation(not completed)](http://wm123450405.github.io/linqjs/#/en-us) :+1:

## Usage 用法

### 1. Import 引入

> Use NodeJs 使用NodeJs
```
$ npm install --save linq-js
```
```javascript
const Enumerable = require('linq-js');
```
> * description:This module require ES6. I suggest you to use this with ES6. The following examples is already use ES6.
> * 说明：本module依赖于ES6。建议项目在中使用ES6。以下案例中将均使用ES6写法。

### 2. Get IEnumerable instance 获取IEnumerable对象

```typescript
interface IEnumerable { };

function asEnumerable():IEnumerable;
//You can use the asEnumerable methods of every object's to get an IEnumerable object;
//任何对象都有asEnumerable方法用来获取IEnumerable对象
```

> e.g. 案例
> ```javascript
> 'abc'.asEnumerable();
> [1,2,3].asEnumerable();
> ({a:1,b:2}).asEnumerable();
> ```

### 3. Use IEnumerable instance 使用IEnumerable对象

> e.g. 案例 简单的判断数组中的数据
> ```javascript
> let pets = [ { name: "Barley", age: 8, vaccinated: true }, { name: "Boots", age: 4, vaccinated: false }, { name: "Whiskers", age: 1, vaccinated: false } ];
> let unvaccinated = pets.asEnumerable().any(p => p.age > 1 && p.vaccinated === false);
> console.log(`There ${ unvaccinated ? "are" : "are not any" } unvaccinated animals over age one.`);
> // This code produces the following output: 这段代码输出以下内容：
> //  There are unvaccinated animals over age one.
> ```

> e.g. 案例 两个数组进行内连接查询
> ```javascript
> let magnus = { name: "Hedlund, Magnus" }, terry = { name: "Adams, Terry" }, charlotte = { name: "Weiss, Charlotte" };
> let barley = { name: "Barley", owner: terry }, boots = { name: "Boots", owner: terry }, whiskers = { name: "Whiskers", owner: charlotte }, daisy = { name: "Daisy", owner: magnus };
> let people = [ magnus, terry, charlotte ];
> let pets = [ barley, boots, whiskers, daisy ];
> let query = people.asEnumerable().join(pets,
>     (person, pet) => ({ ownerName: person.name, pet: pet.name }),
>     person => person,
>     pet => pet.owner);
> for (let obj of query) {
>     console.log(`${ obj.ownerName } - ${ obj.pet }`);
> }
> /*
>  This code produces the following output: 这段代码输出以下内容：
>  Hedlund, Magnus - Daisy
>  Adams, Terry - Barley
>  Adams, Terry - Boots
>  Weiss, Charlotte - Whiskers
>  */
> ```

:*[see mdn(Array)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)*
:*[参考 MDN(Array)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)*

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*

:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
