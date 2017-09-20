let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let topThreeGrades = grades.asEnumerable().orderByDescending().take(3);

console.log("最高的三个成绩是：");
for (let grade of topThreeGrades) {
    console.log(grade);
}

/*
 这段代码的输出结果如下：

 最高的三个成绩是：
 98
 92
 85
*/