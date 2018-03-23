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

tree.toValue("children");
//上述代码等价于以下代码
tree.toValue((obj, value) => obj.children = value);