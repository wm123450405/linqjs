import MapEnumerable from './MapEnumerable';

class Dictionary extends MapEnumerable {
    constructor() {
        super(new Map());
    };
    toObject() {
        let object = {};
        for (let entry of this) {
            object[entry.key] = entry.value;
        }
        return object;
    }
};

export default Dictionary;