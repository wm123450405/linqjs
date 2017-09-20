let amounts = [ 5000, 2500, 9000, 8000, 6500, 4000, 1500, 5500 ];

let query = amounts.asEnumerable().skipWhile((amount, index) => amount > index * 1000);

for (let amount of query) {
    console.log(amount);
}

/*
 这段代码的输出结果如下：

 4000
 1500
 5500
*/