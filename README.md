# LinqJs

[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/linqjs/total.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)

use linq and lambda in javascript  
在javascript中使用linq与lambda

在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作  
从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少

## Change 更新日志

### 2017-03-01

	由import方法修改为require方式引用  
	增加了对node最低版本号的限制

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

#### 2. `toArray()`
```typescript
function toArray():Array;
```
> e.g. 案例
> ```javascript
> [1,2,3].asEnumerable().toArray(); //[1, 2, 3]
> ```

#### 3. `select(selector)`
```typescript
function select(
    selector:Function = defaultSelector
):IEnumerable,

    selector(element:any, index:number):any;
```
> e.g. 案例
> ```javascript
> [1,2,3].asEnumerable().select((element, index) => `${element}|${index}`); //'1|0', '2|1', '3|2'
> ```

#### 4. `where(predicate)`
```typescript
function where(
    predicate:Function = defaultPredicate
):IEnumerable,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> [1,2,3].asEnumerable().where(v => v >= 2); //2, 3
> ```

#### 5. `any(predicate)`
```typescript
function any(
    predicate:Function
):boolean,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> [1,2,3].asEnumerable().any(v => v == 2); //true
> ```

#### 6. `all(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb548541(v=vs.110).asp)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548541(v=vs.110).asp)*
```typescript
function all(
    predicate:Function
):boolean,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> [1,2,3].asEnumerable().all(v => v == 2); //false
> ```

#### 7. `sum(selector)`
```typescript
function sum(
	selector:Function = defaultSelector
):number,

	selector(element:any, index:number):number;
```

#### 8. `average(selector)`
```typescript
function average(
	selector:Function = defaultSelector
):number,

	selector(element:any, index:number):number;
```

More docs, to be continue...
更多内容的说明,未完待补充...  

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*  
:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
