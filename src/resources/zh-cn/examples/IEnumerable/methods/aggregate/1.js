let fruits = [ "苹果", "芒果", "橘子", "百香果", "葡萄" ];

// 确定数组中比 “香蕉” 更长的字符串
let longestName = fruits.asEnumerable().aggregate("香蕉",
		(longest, next) => next.length > longest.length ? next : longest,
		// 返回最终结果
		fruit => `水果 “${ fruit }”`);

console.log(`最长的字符串是${ longestName }`);

// 这段代码的输出结果如下：
//
// 最长的字符串是水果 “百香果”