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

console.log(tree.depthSubTree(value => value === 'd' || value === 'e').select(node => node.value).toArray());

// 这段代码的输出结果如下：
//
// d,e