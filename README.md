# LinqJs

[![GitHub release](https://img.shields.io/github/release/wm123450405/linqjs.svg)](https://github.com/wm123450405/linqjs)
[![Github Releases (by Release)](https://img.shields.io/github/downloads/wm123450405/linqjs/total.svg)](https://github.com/wm123450405/linqjs)
[![npm](https://img.shields.io/npm/v/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![npm](https://img.shields.io/npm/dm/linq-js.svg)](https://www.npmjs.com/package/linq-js)
[![Travis branch](https://img.shields.io/travis/wm123450405/linqjs.svg)](https://travis-ci.org/wm123450405/linqjs)

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

#### 2. `toArray()` :*[see](https://msdn.microsoft.com/en-us/library/bb298736(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb298736(v=vs.110).aspx)*
```typescript
function toArray():Array;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.toArray(); //[1, 2, 3]
> ```

#### 3. `select(selector)` :*[see](https://msdn.microsoft.com/en-us/library/bb534869(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb534869(v=vs.110).aspx)*
```typescript
function select(
    selector:Function = defaultSelector
):IEnumerable,

    selector(element:any, index:number):any;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.select((element, index) => `${element}|${index}`); //'1|0', '2|1', '3|2'
> ```

#### 4. `where(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb549418(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549418(v=vs.110).aspx)*
```typescript
function where(
    predicate:Function = defaultPredicate
):IEnumerable,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.where(v => v >= 2); //2, 3
> ```

#### 5. `any(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb534972(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb534972(v=vs.110).aspx)*
```typescript
function any(
    predicate:Function
):boolean,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.any(v => v == 2); //truee
> ```

#### 6. `all(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb548541(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548541(v=vs.110).aspx)*
```typescript
function all(
    predicate:Function
):boolean,

    predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.all(v => v == 2); //false
> ```

#### 7. `sum(selector)` :*[see](https://msdn.microsoft.com/en-us/library/bb549046(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549046(v=vs.110).aspx)*
```typescript
function sum(
	selector:Function = defaultSelector
):number,

	selector(element:any, index:number):number;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.sum(); //6
> ```

#### 8. `average(selector)` :*[see](https://msdn.microsoft.com/en-us/library/bb549067(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549067(v=vs.110).aspx)*
```typescript
function average(
	selector:Function = defaultSelector
):number,

	selector(element:any, index:number):number;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.average(); //2
> ```

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
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.aggregate(1, (s, v) => s * v); //24
> ```

#### 10. `max(selector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb548659(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548659(v=vs.110).aspx)*
```typescript
function max(
	selector:Function = defaultSelector,
	comparer:Function = defaultComparer
):any,
	
	selector(element:any, index:number):number,
	comparer(element:any, other:any):number;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.max(); //4
> ```

#### 11. `min(selector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb548779(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548779(v=vs.110).aspx)*
```typescript
function min(
	selector:Function = defaultSelector,
	comparer:Function = defaultComparer
):any,
	
	selector(element:any, index:number):number,
	comparer(element:any, other:any):number;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.min(); //1
> ```

#### 12. `concat(other)` :*[see](https://msdn.microsoft.com/en-us/library/bb302894(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb302894(v=vs.110).aspx)*
```typescript
function concat(
	other:IEnumerable
):IEnumerable
```
> e.g. 案例
> ```javascript
> let e1 = [1,'a'].asEnumerable();
> let e2 = [2,'b'].asEnumerable();
> e1.concat(e2); //1, 'a', 2, 'b'
> ```

#### 13. `contains(value, comparer)`
```typescript
function contains(
	value:any, 
	comparer:Function = defaultEqualityComparer
):boolean,

	comparer(element:any, other:any):boolean;
```

#### 14. `count(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb535181(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/en-us/library/bb535181(v=vs.110).aspx)*
```typescript
function count(
	predicate:Function = defaultPredicate
):number,

	predicate(element:any, index:number):boolean;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.count(v => v >= 2); //3
> ```

#### 15. `defaultIfEmpty(defaultValue)` :*[see](https://msdn.microsoft.com/en-us/library/bb355419(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb355419(v=vs.110).aspx)*
```typescript
function defaultIfEmpty(
	defaultValue:any
):IEnumerable
```

#### 16. `distinct(comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb338049(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb338049(v=vs.110).aspx)*
```typescript
function distinct(
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 17. `except(other, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb336390(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb336390(v=vs.110).aspx)*
```typescript
function except(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 18. `union(other, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb358407(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb358407(v=vs.110).aspx)*
```typescript
function union(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 19. `intersect(other, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb355408(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb355408(v=vs.110).aspx)*
```typescript
function intersect(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):IEnumerable,

	comparer(element:any, other:any):boolean;
```

#### 20. `elementAt(index)` :*[see](https://msdn.microsoft.com/en-us/library/bb299233(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb299233(v=vs.110).aspx)*
```typescript
function elementAt(
	index:number
):any;
```

#### 21. `elementAtOrDefault(index, defaultValue)` :*[see](https://msdn.microsoft.com/en-us/library/bb494386(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb494386(v=vs.110).aspx)*
```typescript
function elementAtOrDefault(
	index:number,
	defaultValue:any
):any;
```

#### 22. `first(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb535050(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb535050(v=vs.110).aspx)*
```typescript
function first(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 23. `firstOrDefault(defaultValue, predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb549039(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549039(v=vs.110).aspx)*
```typescript
function firstOrDefault(
	defaultValue:any,
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 24. `last(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb549138(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549138(v=vs.110).aspx)*
```typescript
function last(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 25. `lastOrDefault(defaultValue, predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb548915(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548915(v=vs.110).aspx)*
```typescript
function lastOrDefault(
	defaultValue:any,
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 26. `single(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb535118(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb535118(v=vs.110).aspx)*
```typescript
function single(
	predicate:Function = defaultPredicate
):any,

	predicate(element:any, index:number):boolean;
```

#### 27. `singleOrDefault(defaultValue, predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb549274(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549274(v=vs.110).aspx)*
```typescript
function singleOrDefault(
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
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.join('|'); //'1|2|3'
> ```

#### 29. `ofType(type)` :*[see](https://msdn.microsoft.com/en-us/library/bb360913(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb360913(v=vs.110).aspx)*
```typescript
function ofType(
	type:type
):IEnumerable;
```
> e.g. 案例
> ```javascript
> let e = ['a',1,true,'b',3.2,()=>{}].asEnumerable();
> e.ofType(String); //'a', 'b'
> e.ofType(Number); //1, 3.2
> e.ofType(Boolean); //true
> e.ofType(Function): //()=>{}
> ```

#### 30. `reverse()` :*[see](https://msdn.microsoft.com/en-us/library/bb358497(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb358497(v=vs.110).aspx)*
```typescript
function reverse():IEnumerable;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3].asEnumerable();
> e.reverse(); //3, 2, 1
> ```

#### 31. `sequenceEqual(other, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb342073(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb342073(v=vs.110).aspx)*
```typescript
function sequenceEqual(
	other:IEnumerable,
	comparer:Function = defaultEqualityComparer
):boolean,

	comparer(element:any, other:any):boolean;
```

#### 32. `skip(count)` :*[see](https://msdn.microsoft.com/en-us/library/bb358985(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb358985(v=vs.110).aspx)*
```typescript
function skip(
	count:number
):IEnumerable;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.skip(2); //3, 4
> ```

#### 33. `skipWhile(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb549288(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549288(v=vs.110).aspx)*
```typescript
function skipWhile(
	predicate:Function = defaultPredicate
):IEnumerable,

	predicate(element:any, index:number):boolean;
```

#### 33. `take(count)` :*[see]()* :*[参考]()*
```typescript
function take(
	count:number
):IEnumerable;
```
> e.g. 案例
> ```javascript
> let e = [1,2,3,4].asEnumerable();
> e.take(2); //1, 2
> ```

#### 34. `takeWhile(predicate)` :*[see](https://msdn.microsoft.com/en-us/library/bb503062(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb503062(v=vs.110).aspx)*
```typescript
function takeWhile(
	predicate:Function = defaultPredicate
):IEnumerable,

	predicate(element:any, index:number):boolean;
```

#### 35. `zip(other, resultSelector)` :*[see](https://msdn.microsoft.com/en-us/library/bb548775(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548775(v=vs.110).aspx)*
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

#### 39. `orderBy(keySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb549422(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549422(v=vs.110).aspx)*
```typescript
function orderBy(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 40. `orderByDescending(keySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb548916(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb548916(v=vs.110).aspx)*
```typescript
function orderByDescending(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 41. `join(inner, resultSelector, outerKeySelector, innerKeySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb549267(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb549267(v=vs.110).aspx)*
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

#### 42. `groupBy(keySelector, elementSelector, resultSelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb535049(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb535049(v=vs.110).aspx)*
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

#### 43. `selectMany(collectionSelector, resultSelector)` :*[see](https://msdn.microsoft.com/en-us/library/bb534732(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb534732(v=vs.110).aspx)*
```typescript
function selectMany(
	collectionSelector:Function = defaultSelector,
	resultSelector:Function = defaultSelector
):IEnumerable,

	collectionSelector(element:any, index:number):any,
	resultSelector(element:any):any;
```

#### 44. `groupJoin(inner, resultSelector, outerKeySelector, innerKeySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb535047(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb535047(v=vs.110).aspx)*
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

#### 45. `forEach(action)`
```typescript
function forEach(
	action:Function = defaultAction
),

	action(element:any, index:number):void;
```

#### 46. `getEnumerator()`
```typescript
function getEnumerator():IEnumerator;
```

### IOrderedEnumerable对象

#### 1. `thenBy(keySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb534500(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb534500(v=vs.110).aspx)*
```typescript
function thenBy(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

#### 2. `thenByDescending(keySelector, comparer)` :*[see](https://msdn.microsoft.com/en-us/library/bb534489(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb534489(v=vs.110).aspx)*
```typescript
function thenByDescending(
	keySelector:Function = defaultSelector,
	comparer:Function = defaultComparer
):IOrderedEnumerable,

	keySelector(element:any, index:number):any,
	comparer(element:any, other:any):number;
```

### IMapEnumerable对象
```typescript
interface IMapEnumerable extends IEnumerable { };
```

#### 1. `forEach(action)`
```typescript
function forEach(
	action:Function = defaultAction
),

	action(element:any, key:any):void;
```

### Dictionary对象
```typescript
class Dictionary extends IMapEnumerable { };
```

### Lookup对象
```typescript
class Lookup extends IMapEnumerable { };
```

### IGrouping对象
```typescript
class IGrouping extends IEnumerable { };
```

#### 1. `key`
```typescript
const key:any;
```

### IEnumerator对象
```typescript
interface IEnumerator { };
```

#### 1. `current`

#### 2. `moveNext()`
```typescript
function moveNext():boolean;
```

#### 3. `reset()`
```typescript
function reset():void;
```

### Enumerable类

#### 1. `repeat(element, count)` :*[see](https://msdn.microsoft.com/en-us/library/bb348899(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/bb348899(v=vs.110).aspx)*
```typescript
function Enumerable.repeat(
	element:any,
	count:number
):IEnumerable;
```
> e.g. 案例
> ```javascript
> Enumerable.repeat('a', 2); //'a', 'a'
> ```

#### 2. `range(start, count)` :*[see](https://msdn.microsoft.com/en-us/library/system.linq.enumerable.range(v=vs.110).aspx)* :*[参考](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable.range(v=vs.110).aspx)*
```typescript
function Enumerable.range(
	start:number,
	count:number
):IEnumerable;
```
> e.g. 案例
> ```javascript
> Enumerable.range(2, 3); //2, 3, 4
> ```

#### 3. `comparers.array(array, comparer, last)` :+1:
```typescript
function Enumerable.comparers.array(
	array:array, // 表示值的顺序的数组
	last:boolean = false, // 表示配备不到的元素将作为正序的最末端还是最前端,默认最前端
	comparer:Function = defaultEqualityComparer // 用于查找对比
):Function, // comparer

	comparer(element:any, other:any):boolean;
```

> e.g. 案例
> ```javascript
> let e = [
> 	{"status": "start", "value": "A"},
> 	{"status": "end", "value": "B"},
> 	{"status": "start", "value": "C"},
> 	{"status": "progress", "value": "D"},
> 	{"status": "start", "value": "E"},
> 	{"status": "init", "value": "F"}
> ];
> e.asEnumerable().orderBy(v => v.status, Enumerable.arrayComparer(["start", "progress", "end"])).select(v => v.value); //'F', 'A', 'C', 'E', 'D', 'B'
> e.asEnumerable().orderBy(v => v.status, Enumerable.arrayComparer(["start", "progress", "end"], true)).select(v => v.value); //'A', 'C', 'E', 'D', 'B', 'F'
> ```

#### 4. `comparers.predicate(array, last)` :+1:
```typescript
function Enumerable.comparers.predicate(
	array:array<Function>, // 包含一组校验方法的数组
	last:boolean = false // 表示配备不到的元素将作为正序的最末端还是最前端,默认最前端
):Function; // comparer
```

> e.g. 案例
> ```javascript
> let e = [
> 	{"status": "start", "value": "A"},
> 	{"status": "end", "value": "B"},
> 	{"status": "start", "value": "C"},
> 	{"status": "progress", "value": "D"},
> 	{"status": "start", "value": "E"},
> 	{"status": "init", "value": "F"}
> ];
> e.asEnumerable().orderBy(v => v.status, Enumerable.predicateComparer([s => s == "start", s => s == "progress", s => s == "end"])).select(v => v.value); //'F', 'A', 'C', 'E', 'D', 'B'
> e.asEnumerable().orderBy(v => v.status, Enumerable.predicateComparer([s => s == "start", s => s == "progress", s => s == "end"], true)).select(v => v.value); //'A', 'C', 'E', 'D', 'B', 'F'
> ```

#### 5. `comparers.default` [*defaultComparer*]
#### 6. `comparers.equality` [*defaultEqualityComparer*]
#### 7. `selectors.default` [*defaultSelector*]
#### 8. `selectors.key` [*defaultKeySelector*]
#### 9. `selectors.value` [*defaultValueSelector*]
#### 10. `selectors.groupResult` [*defaultGroupResultSelector*]
#### 11. `predicates:default` [*defaultPredicate*]
#### 12. `actions:default` [*defaultAction*]

## Change list 更新日志

### v2.1.10

	增加 Travis CI 支持
	优化异常类型, 将不再是简单的抛出一个字符串, 而是完整的Error对象
	优化了 IEnumerable 部分方法(elementAt, elementAtOrDefault, first, firstOrDefault, last, lastOrDefault, single, singleOrDefault, indexOf, lastIndexOf)的性能
	优化 IEnumerable ,在 Proxy 受支持的环境下, Object.getOwnPropertyDescriptor 将得到有效的返回

### 2017-03-17 v2.1.9

	修复使用 groupBy 当设置了 comparer 参数时 导致不能有效分组或报错的bug
	修复了 IEnumerable 的方法 defaultIfEmpty 的bug
	修复了 IEnumerable 的方法 sum 与 average 的bug
	修复了 sequenceEqual 在完全匹配是依然返回 false 的bug
	修复了 Enumerable.reverse 如果参数 source 使用原生的 Array 对象,报错的bug
	增加了 ofType 使用 String 类型的数据 作为 type 的值,表示筛选的类型名称(此模式下为强校验,不能检查继承关系)
	优化了 ofType 的一些问题, 对 Object 类型的判定做了修改 RegExp,Array,Function 将不会被认定为一个 Object 对象
	修复 ofType 方法不能识别 Boolean 对象的问题
	修复了 Enumerable.defaultIfEmpty 如果参数 source 使用原生的 Array 对象,不会返回一个 IEnumerable 对象的bug
	修复了 min 与 max 方法报 No such elements 的 bug
	修复 MapEnumerable 的 has 与 delete 方法参数comparer默认值错误的bug
	修复一个不能对原生 Array,Object,String 进行有效扩展的bug
	使用严格模式执行代码 use strict
	修复一处 Enumerable.orderBy 的第一个参数是原生 Array 对象会报错的bug
	增加单元测试,修改发布编译流程

### 2017-03-16 v2.1.8

	修复一处 comparers.array 的 bug
	新增 Enumerable.config.as 方法 用来设置替代 asEnumerable 方法的方法名
	将 Enumerable.Config 修改为 Enumerable.config
	弃用 Enumerable.arrayComparer(建议:Enumerable.comparers.array) 与 Enumerable.predicateComparer(建议:Enumerable.comparers.predicate)
	通过 Enumerable 可以获取 内置 的 actions, predicates, selectors, comparers

### 2017-03-14 v2.1.7

	修复了一些在IE浏览器中的bug
	进一步优化gulp打包, 添加source map

### 2017-03-10 v2.1.6

	优化 core.getType 与 core.typeName 方法, 合并为方法 getType 返回实际的类型名称
	修复某些js版本下 在使用了 Enumerable.Config.extends.array = true 时 无法使用 findIndex 方法的bug
	优化了 Enumerable.arrayComparer, 增加 comparer 参数用于查找对比
	添加对 bower 的支持
	添加 gulp 打包, dist将仅包含 linq.js 与 linq.min.js

### 2017-03-09 v2.1.5

	新增 IEnumerator 接口 与 实现
	新增 Enumerable.IComparable 与 Enumerable.IEquatable 接口, 及调整默认的 defaultComparer 与 defaultEqualityComparer 实现
	新增 Enumerable.arrayComparer 与 Enumerable.predicateComparer

### 2017-03-06 v2.1.4

	修复forEach的bug

### 2017-03-02

	修改了join方法参数顺序,以及参数默认值  
	修改了groupJoin方法参数的顺序,以及参数默认值  
	为selectMany方法的collectionSelector:Function参数方法增加了index参数  
	为zip方法的resultSelector:Function参数方法增加了index参数  
	为aggreagte方法的func:Function参数方法增加了index参数  
	补充了文档

### 2017-03-01

	由import方法修改为require方式引用  
	增加了对node最低版本号的限制

More docs and examples, to be continue...
更多接口文档的案例,未完待补充...  

:*[see msdn(IEnumerable<T>)](https://msdn.microsoft.com/en-us/library/ckzcawb8(v=vs.110).aspx)*
:*[参考 MSDN(IEnumerable<T>)](https://msdn.microsoft.com/zh-cn/library/ckzcawb8(v=vs.110).aspx)*  
:*[see msdn(Enumerable)](https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.110).aspx)*
:*[参考 MSDN(Enumerable)](https://msdn.microsoft.com/zh-cn/library/system.linq.enumerable_methods(v=vs.110).aspx)*
