const execution = typeof process !== 'undefined' ? process.argv[process.argv.length - 1] : '';


const logTable = (title, init, enumerable, native, ...counts) => {
    if (execution && !/performance/ig.test(execution) && execution !== title) return;
    let table = [];
    let now, er, nr, line;
    for (let count of counts) {
        let array = init(count);
        while (array.length < count) {
            array.push(...array.slice(0, count - array.length));
        }
        now = +Date.now();
        er = enumerable(array);
        line = { [title]: count, 'Enumerable': +Date.now() - now };
        now = +Date.now();
        nr = native(array);
        line['Native'] = +Date.now() - now;
        if (!(/rand/.test(title))) {
            if (er !== nr) {
                if (Array.isArray(er) && Array.isArray(nr)) {
                    if (er.length !== nr.length) {
                        console.error(title, 'result not same', er.length, nr.length);
                        console.error(array.map(v => JSON.stringify(v)).join(','))
                    } else if (!Enumerable.sequenceEqual(er, nr)) {
                        console.error(title, 'result not same', er, nr);
                        console.error(array.map(v => JSON.stringify(v)).join(','))
                    }
                } else {
                    console.error(title, 'result not same', er, nr);
                }
            }
        }
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
};
const jsonGenerator = file => count => {
    return (typeof window === 'undefined' ? require('./' + file)[file] : window[file]).slice(0, count);
};

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
        for (let element of array) {
            if (element > max) {
                max = element;
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
        return Enumerable.take(array,array.length / 10).max();
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
    1000000,
    10000000,

);
logTable(
    'order+takeProportion',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).takeProportion(0.1).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(0, array.length / 10);
    },
    100000,
    500000
);
logTable(
    'order+take',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).take(Math.ceil(array.length / 10)).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(0, Math.ceil(array.length / 10));
    },
    100000,
    500000,
    // ...(new Array(1000).fill(200).map(v => v + Math.floor(Math.random() * 1000)))
);
logTable(
    'order+take',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).take(Math.ceil(9 * array.length / 10)).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(0, Math.ceil(9 * array.length / 10));
    },
    100000,
    500000,
    // ...(new Array(1000).fill(200).map(v => v + Math.floor(Math.random() * 1000)))
);
logTable(
    'order+skipProportion',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).skipProportion(0.9).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(array.length / 10 * 9);
    },
    100000,
    500000
);
logTable(
    'order+skip',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).skip(Math.ceil(9 * array.length / 10)).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(Math.ceil(9 * array.length / 10));
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
        let result = [];
        for (let element of array) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
        result.sort((a, b) => a - b);
        return result.slice(0, 100);
    },
    10000,
    100000
);
logTable(
    'group+order',
    rangeGenerator(0, 100000),
    array => {
        return Enumerable.groupBy(array, v => Math.floor(v / 100)).orderByDescending(group => group.count()).thenBy(group => group.key).take(50).map(group => group.key).toArray();
    },
    array => {
        let result = [];
        for (let element of array) {
            let key = Math.floor(element / 100);
            let node = result.find(node => node.key === key);
            if (node) {
                node.count++;
            } else {
                result.push({
                    key, count: 1
                })
            }
        }
        result = result.sort((a, b) => b.count === a.count ? a.key - b.key : b.count - a.count);
        return result.slice(0, 50).map(e => e.key);
    },
    10000,
    100000
);

const weightMerge = (original, weight, summary = false) => original + (summary ? weight * 0.2 : weight);
const ignoreWords = [ 'pro', 'mini', 'max' ]
const ignoreTags = [ 't', 'm', 'q', 'r', 'p', 'c', 'u', 'w', 'a', 'ad', 'd', 'TIME' ]; //时间副词
const ignoreTag = ({ tag, word }) => ignoreTags.includes(tag) || ignoreWords.includes(word.toLowerCase()) || word.length < 2 || /^[\x00-\xFF]*\d+[\x00-\xFF]*$/ig.test(word);
const ignores = [];

logTable(
    'complex',
    jsonGenerator('informations.json.js'),
    array => {
        return Enumerable.from(array)
            .selectMany(info => info.tags)
            .where(({ word, tag }) => !ignoreTag({ word, tag }) && !ignores.includes(word.toLowerCase()))
            .groupBy(({ word, tag }) => `${tag}-${word}`, ({ weight }) => weight, (key, grouping) => ({ key, weight: grouping.reduce((seed, value) => weightMerge(seed, value), 0) }))
            .orderByDescending(tag => tag.weight)
            .take(15)
            .select(({ key, weight }) => `${key}:${weight}`)
            .toArray();
    },
    array => {
        let tags = array.map(info => info.tags).flat();
        tags = tags.filter(({ word, tag }) => !ignoreTag({ word, tag }) && !ignores.includes(word.toLowerCase()));
        let counting = { };
        for (let t of tags) {
            let { tag, word, weight } = t;
            let key = `${tag}-${word}`;
            counting[key] = weightMerge(counting[key] || 0, weight);
        }
        let countingArray = [];
        for (let [key, weight] of Object.entries(counting)) {
            countingArray.push({ key, weight });
        }
        countingArray.sort((a, b) => b.weight - a.weight);
        countingArray = countingArray.slice(0, 15);
        return countingArray.map(({ key, weight}) => `${key}:${weight}`)
    },
    20,
    200,
    1000,
    10000
);
