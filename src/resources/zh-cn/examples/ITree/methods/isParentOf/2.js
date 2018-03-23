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

console.log(tree.isParentOf('c'));
console.log(tree.isParentOf('e'));

// 这段代码的输出结果如下：
//
// false
// true