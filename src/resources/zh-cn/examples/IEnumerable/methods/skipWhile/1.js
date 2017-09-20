let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let lowerGrades = grades.asEnumerable().orderByDescending().skipWhile(grade => grade >= 80);

console.log("所有小于80的成绩：");
for (let grade of lowerGrades) {
    console.log(grade);
}

/*
 这段代码的输出结果如下：

 所有小于80的成绩：
 70
 59
 56
*/