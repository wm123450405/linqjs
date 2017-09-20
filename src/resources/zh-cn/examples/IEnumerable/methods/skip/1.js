let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let lowerGrades = grades.asEnumerable().orderByDescending().skip(3);

console.log("不包含最大三个数其余数字有：");
for (let grade of lowerGrades) {
    console.log(grade);
}

/*
 这段代码的输出结果如下：

 不包含最大三个数其余数字有：
 82
 70
 59
 56
*/