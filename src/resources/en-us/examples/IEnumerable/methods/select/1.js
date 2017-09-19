let squares = Enumerable.range(1, 10).select(x => x * x);

for (let num of squares) {
    console.log(num);
}
/*
 This code produces the following output:

 1
 4
 9
 16
 25
 36
 49
 64
 81
 100
*/