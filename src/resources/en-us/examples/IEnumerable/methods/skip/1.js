let grades = [ 59, 82, 70, 56, 92, 98, 85 ];

let lowerGrades = grades.asEnumerable().orderByDescending(g => g).skip(3);

console.log("All grades except the top three are:");
for (let grade of lowerGrades) {
    console.log(grade);
}

/*
 This code produces the following output:

 All grades except the top three are:
 82
 70
 59
 56
*/