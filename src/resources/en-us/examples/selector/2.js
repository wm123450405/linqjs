let arrays = [
    [ 1, 2, 4, 8 ],
    [ 1, 3, 9 ],
    [ 1, 5 ]
];

arrays.asEnumerable().select(1);
//the above code and the following code are same feature.
arrays.asEnumerable().select(array => array[1]);