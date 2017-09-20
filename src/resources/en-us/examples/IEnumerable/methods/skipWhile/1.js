let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let lowerGrades = grades.asEnumerable().orderByDescending().skipWhile(grade => grade >= 80);

console.log("All grades below 80:");
for (let grade of lowerGrades) {
    console.log(grade);
}

/*
 This code produces the following output:

 All grades below 80:
 70
 59
 56
*/