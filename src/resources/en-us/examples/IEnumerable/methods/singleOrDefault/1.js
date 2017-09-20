let fruits1 = [ "orange" ];

let fruit1 = fruits1.asEnumerable().singleOrDefault("No such string!");

console.log(fruit1);

/*
 This code produces the following output:

 orange
*/