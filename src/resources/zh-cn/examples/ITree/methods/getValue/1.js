let tree = ({
    value: 'a',
    children: [
        {
            value: 'b',
            children: [
                { value: 'c' },
                { value: 'd' }
            ]
        },
        { value: 'e', }
    ]
}).asEnumerable(node => node.children, node => node.value);

console.log(tree.getChild(0).getValue(1));

// 这段代码的输出结果如下：
//
// d