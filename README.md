# LinqJs

[![GitHub release](https://img.shields.io/github/release/wm123450405/linqjs.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![npm](https://img.shields.io/npm/dm/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![Travis branch](https://img.shields.io/travis/wm123450405/linqjs.svg)](https://travis-ci.org/wm123450405/linqjs)

use linq and lambda in javascript  
在javascript中使用linq与lambda

在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作  
从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少

[尚未完成的帮助文档](http://wm123450405.github.io/linqjs/#/zh-cn) :+1:
[Documentation(not completed)](http://wm123450405.github.io/linqjs/#/en-us) :+1:

## Usage 用法

Usage for English is Coming soon...

### Start 开始使用

#### 1. 引入
>使用nodejs
```
$ npm install --save linq-js
```
```javascript
const Enumerable = require('linq-js');
```
> * 说明:本module依赖于ES6,建议项目在中使用ES6,以下案例中将均使用ES6写法

#### 2. 配置
```javascript
Enumerable.config.extends.array = true; //开启针对Array的扩展
Enumerable.config.extends.string = true; //开启针对String的扩展
Enumerable.config.extends.object = true; //开启针对Object的扩展
Enumerable.config.as = 'em'; //设置使用.em()来获取IEnumerable对象
```

### 获取IEnumerable对象

```typescript
interface IEnumerable { };

function asEnumerable():IEnumerable; //任何对象都有asEnumerable方法用来获取IEnumerable对象
```

> e.g. 案例
> ```javascript
> 'abc'.asEnumerable();
> [1,2,3].asEnumerable();
> ({a:1,b:2}).asEnumerable();
> ```

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*  
:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
