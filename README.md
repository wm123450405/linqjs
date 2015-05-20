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

## Usage 用法

Coming soon...

### Static Functions  静态方法
| function(方法)        | type(类型) | description(描述) |
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
| Date.start(id) | Date | 开始一个计时器,计时器标识id,id为空启用默认计时器 |
| Date.tick(id) | Date | 获取标识为id的计时器从开始或重置后至当前时间的间隔 |
| Date.reset(id) | Date | 获取标识为id的计时器从开始或重置后至当前时间的间隔,并重置该计时器 |


#### e.g.  案例

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

#### 1. `log()`  *Object*
> 将对象输出到控制台,返回对象本身,可链式调用
```javascript
['a','b','c'].log().where("e=>e=='a'").log();
```

#### 2. `format(fixed)` *Number*
> 显示精确到*fixed*位数后并按照千分位分隔的字符
```javascript
(1234567.8901).format(2); //1,234,567.89
```

#### 3. `loop(start,fun)` *Number* *String*
> 循环执行fun相应次数

> * 如果start不存在,start表示0  
> * `fun(index,current):void`  *index*表示循环的次数索引,*current*表示初始值加上当前索引的当前值  [可为Lambda表达式](#lambda)
```javascript
(10).loop(0,"i,c=>alert(i)"); //提示10次
'10'.loop("i,c=>alert(i)"); //同上
```

#### 4. `code()` *String*
> 返回指定字符的ASCII码
```javascript
'a'.code(); //97
```

#### 5. `codes()` *String*
> 返回指定字符串的ASCII码数组
```javascript
'abc'.codes(); //[97,98,99]
```

#### 6. `char()` *Number* *String*
> 返回ASCII码对应的字符
```javascript
'97'.char(); //'a';
```

#### 7. `repeat(count)` *String*
> 由*count*个该字符串拼接而成的新字符串
```javascript
'abc'.repeat(3); //'abcabcabc'
```

#### 8. `repeat(count)` *Object*
> 由*count*个该元素组成的新数组
```javascript
(0).repeat(3); //[0,0,0]
```

#### 9. `splice(index,length,...params)` *String*
> 返回将字符串从*index*开始的*length*长度部分替换成*params*后的结果

#### 10. `random(count)` *String* *Array*
> 返回字符串或数组中一个或多个随机的元素或字符  

> * *count*为可选参数

#### 11. `forEach(fun)` *String* *Array*
> 循环每个元素,并对每个元素执行*fun*方法,*fun*返回`false`时终止遍历

> * `fun(element,index,prev,next):boolean`  [可为Lambda表达式](#lambda)

#### 12. `trim()` *String* *Array*
> 取出开头与结尾的空格或空元素

#### 13. `ltrim()` *String* *Array*
> 取出开头的空格或空元素

#### 14. `rtrim()` *String* *Array*
> 取出结尾的空格或空元素

#### 15. `leftPad(length,charOrElement)` *String* *Array*
> 在指定对象前端使用*charOrElement*补齐对象到*length*总长度,实现右对齐

#### 16. `leftPad(fixed,length)` *Number*
> 对数字四舍五入到小数点后*fixed*位,并在前端补齐空格至*length*总长度,实现右对齐

#### 17. `rightPad(length,charOrElement)` *String* *Array*
> 在指定对象后端使用*charOrElement*补齐对象到*length*总长度,实现左对齐

#### 18. `rightPad(fixed,length)` *Number*
> 对数字四舍五入到小数点后*fixed*位,并在后端端补齐小数点与*0*至*length*总长度,实现左对齐

#### 19. `cast(fun)` *String* *Array*
> 返回一个数组,数组内容为对源数组对应的每个元素执行*fun*方法转换类型后的值

> * `fun(element):object`  如:`parseInt`,`Math.round`

#### 20. `select(fun)` *Array*
> 返回一个数组,数组内容有如下情况:  
> * *fun*为方法:对源数组的每个元素执行*fun*方法返回的值

>   * `fun(element,index,prev,next):object`  [可为Lambda表达式](#lambda)

> * *fun*为字符串:获取源数组的每个元素的*fun*属性,同时获取多个属性使用逗号隔开
```javascript
[{p1:0,p2:'a',p3:true},{p1:1,p2:'b',p3:false}].select("p1,p2");
```

### Lambda

Lambda 表达式 支持如下情况:

#### 1. `"arguments=>return"`
*arguments*:参数列表,逗号隔开
*return*:返回值
案例:`"abc".select("e=>e.toUpperCase()")`
#### 2. `"arguments=>new {...}"`
*arguments*:参数列表,逗号隔开
返回一个*object*
案例:`"abc".select("e,i=>new {ch:e,index:i}")`
#### 3. `"arguments=>{funbody}"`
*arguments*:参数列表,逗号隔开
*funbody*:方法体
案例:`"abc".forEach("e,i=>{alert(e+','+i);}")`

### JSQL

JSQL 格式如下:

```
select column1 [as name1] [, column2 [as name2], column3 [as name3], ...] from element in list [join element2 in list2 on conditions ...] [where conditions] [group by column1 [, column2, column3, ...] [having conditions]] [order by column1 [, column2, column3, ...]]
```
其中:
*column*为取值表达式:`element.property`或其他复杂表达式
*list*指向对象、数组或字符串:`this`(同`_$0`),`_$<index>`指向参数列表中第*index*个的参数值,如 `_$1`
*conditions*为条件表达式,需要表达式最终结果为*boolean*型,或能表达其是否满足条件的其他值

...  
更多功能请阅读api.html的内容

## Examples 代码案例

```javascript
var words = Array.rangeChar('a','z');
words.count(); //26;
words = words.select("e=>new {w:e,c:e.charCodeAt(0)}"); //[{w:'a',c:97},{w:'b',c:98},...]
words.where("e=>e.c.isBetween(100,108)").select('w'); //["d","e","f","g","h","i","j","k","l"]
words.orderBy("e=>e.c%10").limit(0,10).select('c'); //[110,100,120,121,101,111,122,112,102,103]
words.forEach(function(e,i){
	e.log();
});
words.groupBy("e=>e.c%5").select("g=>g.count()"); //[6,5,5,5,5]
"from word in this select word.w where word.c < 110 && word.c % 2 == 0 && !_$1.exists(word.w)".query(words, ['f','h']);// ["b","d","j","l"]
```


## Warning 注意
 * simple版本相比full版本缺少了用于JSQL的相关方法,如query,beginQuery,endQuery等等
 * 此版本目前支持jQuery任何版本,不相冲突