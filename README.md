# LinqJs

[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/linqjs/total.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)

use linq and lambda in javascript  
在javascript中使用linq与lambda

在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作
从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少

## Usage 用法

Usage for English is Coming soon...

### Start 开始使用

#### 1. 引入
>使用nodejs
```
node --save-dev linq-js
```
```javascript
const Enumerable = require('linq-js').default; //ES5
import Enumerable from 'linq-js'; //ES6 (建议)
```
> * 说明:本module依赖于ES6,建议项目在中使用ES6,以下案例中将均使用ES6写法

#### 2. 获取IEnumerable对象
```javascript
'abc'.asEnumerable();
[1,2,3].asEnumerable();
{a:1,b:2}.asEnumerable();
```

[查考msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)
[查考msdn(IEnumerable)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)