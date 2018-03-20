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

console.log(tree.pathTo(tree.getChild(0).getChild(1)).toArray());

// 这段代码的输出结果如下：
//
// a,b,d