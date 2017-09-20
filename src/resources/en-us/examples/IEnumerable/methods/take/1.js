let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let topThreeGrades = grades.asEnumerable().orderByDescending().take(3);

console.log("The top three grades are:");
for (let grade of topThreeGrades) {
    console.log(grade);
}

/*
 This code produces the following output:

 The top three grades are:
 98
 92
 85
*/