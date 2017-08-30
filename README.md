# LinqJs

[![GitHub release](https://img.shields.io/github/release/wm123450405/linqjs.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![npm](https://img.shields.io/npm/dm/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![Travis branch](https://img.shields.io/travis/wm123450405/linqjs.svg)](https://travis-ci.org/wm123450405/linqjs)

use linq and lambda in javascript  
在javascript中使用linq与lambda

在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作
Since 2.1.0, I rewrite all to use new features of ES6. The performance be better, memory is used less and using deferred execution.
从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少

[尚未完成的帮助文档](http://wm123450405.github.io/linqjs/#/zh-cn) :+1:
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

> e.g. 案例
> ```javascript
> let pets = [ { name: "Barley", age: 8, vaccinated: true }, { name: "Boots", age: 4, vaccinated: false }, { name: "Whiskers", age: 1, vaccinated: false } ];
> let unvaccinated = pets.asEnumerable().any(p => p.age > 1 && p.vaccinated === false);
> console.log(`There ${ unvaccinated ? "are" : "are not any" } unvaccinated animals over age one.`);
> // This code produces the following output: 这段代码输出一下内容：
> //  There are unvaccinated animals over age one.
> ```

> e.g. 案例
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
>  This code produces the following output: 这段代码输出一下内容：
>  Hedlund, Magnus - Daisy
>  Adams, Terry - Barley
>  Adams, Terry - Boots
>  Weiss, Charlotte - Whiskers
>  */
> ```

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*  
:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
