const logTable = (title, init, enumerable, native, ...counts) => {
    let table = [];
    let now, er, nr, line;
    for (let count of counts) {
        let array = init(count);
        now = +Date.now();
        er = enumerable(array);
        line = { [title]: count, 'Enumerable': +Date.now() - now };
        now = +Date.now();
        nr = native(array);
        if (!(/rand/.test(title))) {
            if (er !== nr) {
                if (Array.isArray(er) && Array.isArray(nr)) {
                    if (er.length !== nr.length) {
                        console.error(title, 'result not same', er.length, nr.length);
                    } else if (!Enumerable.zip(er, nr, (l, r) => l === r).all()) {
                        console.error(title, 'result not same');
                    }
                } else {
                    console.error(title, 'result not same', er, nr);
                }
            }
        }
        line['Native'] = +Date.now() - now;
        table.push(line);
    }
    console.table(table, [title, 'Enumerable', 'Native']);
}

const defaultGenerator = count => {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.random());
    }
    return array;
};
const rangeGenerator = (min, max) => count => {
    let size = max - min;
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * size) + min);
    }
    return array;
}

logTable(
    'random',
    defaultGenerator,
    array => {
        return Enumerable.random(array);
    },
    array => {
        return array[Math.floor(array.length * Math.random())];
    },
    100000,
    1000000,
    10000000
);
logTable(
    'max',
    defaultGenerator,
    array => {
        return Enumerable.max(array);
    },
    array => {
        let max = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    100000,
    1000000,
    10000000
);
logTable(
    'take+max',
    defaultGenerator,
    array => {
        return Enumerable.takeProportion(array,0.1).max();
    },
    array => {
        let max = 0, length = array.length / 10;
        for (let i = 0; i < length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    100000,
    1000000,

);
logTable(
    'order+take',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).takeProportion(0.1).toArray();
    },
    array => {
        array = [...array].sort();
        return array.slice(0, array.length / 10);
    },
    100000,
    500000
);
logTable(
    'order+skip',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).skipProportion(0.9).toArray();
    },
    array => {
        array = [...array].sort();
        return array.slice(array.length / 10 * 9);
    },
    100000,
    500000
);
logTable(
    'distinct+order+take',
    rangeGenerator(0, 10000),
    array => {
        return Enumerable.distinct(array).orderBy().take(100).toArray();
    },
    array => {
        let length = array.length;
        let result = [];
        for (let i = 0; i < length; i++) {
            let value = array[i];
            if (result.indexOf(value) === -1) {
                result.push(value);
            }
        }
        result.sort();
        return result.slice(0, 100);
    },
    10000,
    100000
);