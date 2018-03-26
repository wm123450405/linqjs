let tree = ({
    value: 'a',
    children: [
        { value: 'b' },
        { value: 'c' },
        { value: 'd' },
        { value: 'e' }
    ]
}).asEnumerable(node => node.children, node => node.value);

console.log(tree.prev('d'));

// 这段代码的输出结果如下：
//
// c