let arrays = [
    [ 1, 2, 4, 8 ],
    [ 1, 3, 9 ],
    [ 1, 5 ]
];

arrays.asEnumerable().select(1);
//上述代码等价于以下代码
arrays.asEnumerable().select(array => array[1]);