# LinqJs

[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/linqjs/total.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)

use linq and lambda in javascript  
在javascript中使用linq与lambda

在1.0.0中使用了字符串的lambda表达式,过于繁琐,并且不支持延迟操作  
从2.1.0开始整体代码重新编写,使用全新的ES6的特性,性能更好,同时对数据的操作是延时操作,占用更少

## Change 更新日志

### 2017-03-02

	修改了join方法参数顺序,以及参数默认值  
	为selectMany方法的collectionSelector:Function参数方法增加了index参数  
	为zip方法的resultSelector:Function参数方法增加了index参数  
	为aggreagte方法的func:Function参数方法增加了index参数  
	补充了文档

### 2017-03-01

	由import方法修改为require方式引用  
	增加了对node最低版本号的限制

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
Enumerable.Config.extends.array = true; //开启针对Array的扩展
Enumerable.Config.extends.string = true; //开启针对String的扩展
Enumerable.Config.extends.object = true; //开启针对Object的扩展
```

### Enumerable类

#### 1. `repeat(element, count)`
```typescript
function repeat(
	element:any,
	count:number
):IEnumerable;
```

#### 2. `range(start, count)`
```typescript
function range(
	start:number,
	count:number
):IEnumerable;
```

### IEnumerable对象

#### 1. 获取IEnumerable对象
```typescript
interface IEnumerable { };

function asEnumerable():IEnumerable; //任何对象都有asEnumerable方法用来获取IEnumerable对象
```

> e.g. 案例
> ```javascript
> 'abc'.asEnumerable();
> [1,2,3].asEnumerable();
> {a:1,b:2}.asEnumerable();
> ```

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

#### 9. `aggregate(seed, func, resultSelector)` :*[see](https://msdn.microsoft.com/en-us/library/bb548744(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548744(v=vs.110).aspx)*
```typescript
function aggregate(
	seed:any,
	func:Function,
	resultSelector:Function = defaultSelector
):any,

	func(seed:any, element:any, index:number):any,
	resultSelector(seed:any):any;
```

#### 10. `max(selector, comparer)`
```typescript
function max(
	selector:Function = defaultSelector,
	comparer:Function = defaultComparer
):any,
	
	selector(element:any, index:number):number,
	comparer(element:any, other:any):number;
```

#### 11. `min(selector, comparer)`
```typescript
function min(
	selector:Function = defaultSelector,
	comparer:Function = defaultComparer
):any,
	
	selector(element:any, index:number):number,
	comparer(element:any, other:any):number;
```

#### 12. `concat(other)`
```typescript
function concat(
	other:IEnumerable
):IEnumerable
```

#### 13. `contains(value, comparer)`
```typescript
function contains(
	value:any, 
	comparer:Function = defaultEqualityComparer
):boolean,

	comparer(element:any, other:any):boolean;
```

#### 14. `count(predicate)`
```typescript
function count(
	predicate:Function = defaultPredicate
):number,

	predicate(element:any, index:number):boolean;
```

#### 15. `defaultIfEmpty(defaultValue)` :*[see](https://msdn.microsoft.com/en-us/library/bb355419(v=vs.110).aspx)*
```typescript
function defaultIfEmpty(
	defaultValue:any
):IEnumerable
```

#### 16. `distinct(comparer)`
```typescript
function distinct(
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 17. `except(other, comparer)`
```typescript
function except(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 18. `union(other, comparer)`
```typescript
function union(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 19. `intersect(other, comparer)`
```typescript
function intersect(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 20. `elementAt(index)`
```typescript
function elementAt(
	index:number
):any;
```

#### 21. `elementAtOrDefault(index, defaultValue)`
```typescript
function elementAtOrDefault(
	index:number,
	defaultValue:any
):any;
```

#### 22. `firstAt(predicate)`
```typescript
function firstAt(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 23. `firstAtOrDefault(defaultValue, predicate)`
```typescript
function firstAtOrDefault(
	defaultValue:any,
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 24. `lastAt(predicate)`
```typescript
function lastAt(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 25. `lastAtOrDefault(defaultValue, predicate)`
```typescript
function lastAtOrDefault(
	defaultValue:any,
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 26. `singleAt(predicate)`
```typescript
function singleAt(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 27. `singleAtOrDefault(defaultValue, predicate)`
```typescript
function singleAtOrDefault(
	defaultValue:any,
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 28. `join(split)`
```typescript
function join(
	split:string
):string;
```

#### 29. `ofType(type)`
```typescript
function ofType(
	type:type
):IEnumerable;
```

#### 30. `reverse()`
```typescript
function reverse():IEnumerable;
```

#### 31. `sequenceEqual(other, comparer)`
```typescript
function sequenceEqual(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):boolean,

	comparer(element:any, other:any):boolean;
```

#### 32. `skip(count)`
```typescript
function skip(
	count:number
):IEnumerable;
```

#### 33. `skipWhile(predicate)`
```typescript
function skipWhile(
	predicate:Function = defaultPredicate
):IEnumerable,

	predicate(element:any, index:number):boolean;
```

#### 33. `take(count)`
```typescript
function take(
	count:number
):IEnumerable;
```

#### 34. `takeWhile(predicate)`
```typescript
function takeWhile(
	predicate:Function = defaultPredicate
):IEnumerable,

	predicate(element:any, index:number):boolean;
```

#### 35. `zip(other, resultSelector)`
```typescript
function zip(
	other:IEnumerable
	resultSelector:Function
):IEnumerable,

	resultSelector(element:any, other:any, index:number):any;
```

#### 36. `toDictionary(keySelector, elementSelector, comparer)`
```typescript
function toDictionary(
	keySelector:Function = defaultSelector,
	valueSelector:Function = defaultSelector,
	comparer:Function = defaultEqualityComparer
):Dictionary,

	keySelector(element:any, index:number):any,
	valueSelector(element:any, index:number):any,
	comparer(element:any, other:any):boolean;
```

#### 37. `toLookup(keySelector, elementSelector, comparer)`
```typescript
function toLookup(
	keySelector:Function = defaultSelector,
	valueSelector:Function = defaultSelector,
	comparer:Function = defaultEqualityComparer
):Lookup,

	keySelector(element:any, index:number):any,
	valueSelector(element:any, index:number):any,
	comparer(element:any, other:any):boolean;
```

#### 38. `toObject(keySelector, elementSelector, comparer)`
```typescript
function toObject(
	keySelector:Function = defaultKeySelector,
	valueSelector:Function = defaultValueSelector,
	comparer:Function = defaultEqualityComparer
):any,

	keySelector(element:any, index:number):string,
	valueSelector(element:any, index:number):any,
	comparer(element:string, other:string):boolean;
```

#### 39. `orderBy(keySelector, comparer)`
```typescript
function orderBy(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 40. `orderByDescending(keySelector, comparer)`
```typescript
function orderByDescending(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 41. `join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer)`
```typescript
function join(
	inner:IEnumerable,
	resultSelector:Function,
	outerKeySelector:Function = defaultSelector,
	innerKeySelector:Function = defaultSelector,
	comparer:Function = defaultEqualityComparer
):IEnumerable

	resultSelector(element:any, other:any):any,
	outerKeySelector(element:any, index:number):any,
	innerKeySelector(element:any, index:number):any,
	comparer(element:any, other:any):boolean;
```

#### 42. `groupBy(keySelector, elementSelector, resultSelector, comparer)`
```typescript
function groupBy(
	keySelector:Function = defaultSelector, 
	elementSelector:Function = defaultSelector, 
	resultSelector:Function = defaultGroupResultSelector, 
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	keySelector(element:any, index:number):any,
	elementSelector(element:any, index:number):any,
	resultSelector(key:any, grouping:IGrouping):any,
	comparer(element:any, other:any):boolean;
```

#### 43. `selectMany(collectionSelector, resultSelector)`
```typescript
function selectMany(
	collectionSelector:Function = defaultSelector,
	resultSelector:Function = defaultSelector
):IEnumerable,

	collectionSelector(element:any, index:number):any,
	resultSelector(element:any):any;
```

#### 44. `groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer)`
```typescript
function groupJoin(
	inner:IEnumerable,
	resultSelector:Function,
	outerKeySelector:Function = defaultSelector,
	innerKeySelector:Function = defaultSelector,
	comparer:Function = defaultEqualityComparer
):IEnumerable

	resultSelector(element:any, grouping:IGrouping):any,
	outerKeySelector(element:any, index:number):any,
	innerKeySelector(element:any, index:number):any,
	comparer(element:any, other:any):boolean;
```

### IOrderedEnumerable对象

#### 1. `thenBy(keySelector, comparer)`
```typescript
function thenBy(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 2. `thenByDescending(keySelector, comparer)`
```typescript
function thenByDescending(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

### Dictionary对象

### Lookup对象

### IGrouping对象

#### 1. `key`
```typescript
key:any;
```

More docs and examples, to be continue...
更多接口文档的案例,未完待补充...  

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*  
:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
