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
npm install --save-dev linq-js
```
```javascript
const Enumerable = require('linq-js');
```
> * 说明:本module依赖于ES6,建议项目在中使用ES6,以下案例中将均使用ES6写法

#### 2. 配置
```javascript
Enumerable.Config.extends.array = true; //开启针对Array的扩展
Enumerable.Config.extends.string = true; //开启针对String的扩展
Enumerable.Config.extends.object = true; //开启针对Object的扩展
```

### IEnumerable对象

#### 1. 获取IEnumerable对象
```javascript
'abc'.asEnumerable();
[1,2,3].asEnumerable();
{a:1,b:2}.asEnumerable();
```

#### 2. `toArray():array` *IEnumerable*
```
[1,2,3].asEnumerable().toArray(); //[1, 2, 3]
```

#### 3. `select(selector:Function(element:object, index:int):object = defaultSelector):IEnumerable` *IEnumerable*
```javascript
[1,2,3].asEnumerable().select((element, index) => `${element}|${index}`); //'1|0', '2|1', '3|2'
```

#### 4. `where(predicate:Function(element:object, index:int):boolean = defaultPredicate):IEnumerable` *IEnumerable*
```javascript
[1,2,3].asEnumerable().where(v => v >= 2); //2, 3
```

#### 5. `any(predicate:Function(element:object, index:int):boolean = defaultPredicate):boolean` *IEnumerable*
```javascript
[1,2,3].asEnumerable().any(v => v == 2); //true
```

#### 6. `all(predicate:Function(element:object, index:int):boolean = defaultPredicate):boolean` *IEnumerable*
```javascript
[1,2,3].asEnumerable().all(v => v == 2); //false
```

[查考msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)  
[查考msdn(IEnumerable)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)