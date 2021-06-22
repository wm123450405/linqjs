let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let lowerFiftyPercentGrades = grades.asEnumerable().orderByDescending().skipProportion(0.5);

console.log("50%名额外的低分成绩：");
for (let grade of lowerFiftyPercentGrades) {
    console.log(grade);
}

/*
 这段代码的输出结果如下：

 50%名额外的低分成绩：
 82
 70
 59
 56
*/