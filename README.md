# LinqJs

use linq and lambda in javascript  
在javascript中使用linq与lambda

 * can use linq function with an object of Array or String
 * 直接对Array和String进行扩展,可直接使用
 * extends some function of Number,Date,Console
 * 同时扩展了Number、Date、Console的部分方法,方便使用


And here's some code! :+1:  
这里有一些示例代码! :+1:

```javascript
['Javascript', 'Java', 'C#', 'php', 'HTML5'].orderBy();
'Hello world'.count('o');
['Javascript', 'Java', 'C#', 'php', 'HTML5'].where("e=>e.startsWith('J')");
```

### APIS

Coming soon

### Static Functions  静态方法
| function(方法)        | type（类型) | description(描述) |
| -------------------   | :---------: | ----------------- |
| Object.valueOf(value) | Object | return an Object object <br/>返回一个值的Object对象 |
| Array.range(start,len) | Array | 生成一个长度为len的数组,数组内容为从start开始逐个加1的整数 |
| Array.rangeBetween(start,end) | Array | 生成一个数组,数组内容为从start开始到end结束步长长度为1的整数 |
| Array.rangeChar(startChar,endChar) | Array | 生成一个数组,数组内容为从字符start开始到字符end结束的字符 |
| Array.rangeCharCode(startChar,endChar) | Array | 生成一个数组,数组内容为从字符start开始到字符end结束的字符的ASCII码 |
| Array.repeat(element,count) | Array | 生成一个长度为count的数组,数组的每个元素都为element |
| String.repeat(word,count) | String | 由count个word拼接而成的新字符串 |
| Math.random(start,end) | Math | 返回一个从start开始end结束的浮点型随机数 |
| Math.randomInt(start,end)	| Math | 返回一个从start开始end结束的随机整数 |

e.g.  案例

```javascript
Object.valueOf(1); //Number {[[PrimitiveValue]]: 1}
Object.valueOf('abc'); //["a","b","c"]
Object.valueOf(true); //Boolean {[[PrimitiveValue]]: true}
Object.valueOf([1,2,3]); //[1,2,3]
Object.valueOf({}); //Object {}
Array.range(2,3); //[2, 3, 4]
Array.rangeBetween(2,4); //[2, 3, 4]
Array.rangeChar('a','c'); //['a','b','c']
Array.rangeCharCode('a','c'); //[97, 98, 99]
Array.repeat('c',3); //["c", "c", "c"]
String.repeat('c',3); //"ccc"
```

### Unstatic Functions 非静态方法

`log()`  *Object*
> 将对象输出到控制台,返回对象本身,可链式调用
```javascript
['a','b','c'].log().where("e=>e=='a'").log();
```

`format(fixed)` *Number*
> 显示精确到fixed位数后并按照千分位分隔的字符
```javascript
(1234567.8901).format(2); //1,234,567.89
```

`loop(start,fun)` *Number* *String*
> 循环执行fun相应次数
如果start不存在start表示0
`fun(index,current):void`  *index*表示循环的次数索引,*current*表示初始值加上当前索引的当前值  可为Lambda表达式
```javascript
(10).loop(0,"i,c=>alert(i)"); //提示10次
'10'.loop("i,c=>alert(i)"); //同上
```