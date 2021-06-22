let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let topFiftyPercentGrades = grades.asEnumerable().orderByDescending().takeProportion(0.5);

console.log("前50%名额的最高成绩是：");
for (let grade of topFiftyPercentGrades) {
    console.log(grade);
}

/*
 这段代码的输出结果如下：

 前50%名额的最高成绩是：
 98
 92
 85
*/