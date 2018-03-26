let tree = ({
    value: 'a',
    children: [
        { value: 'b' },
        { value: 'c' },
        { value: 'd' },
        { value: 'e' }
    ]
}).asEnumerable(node => node.children, node => node.value);

console.log(tree.next('c'));

// 这段代码的输出结果如下：
//
// d