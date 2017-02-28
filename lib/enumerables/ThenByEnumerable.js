import IOrderedEnumerable from './IOrderedEnumerable';

import thenByComparer from './../methods/thenByComparer';
import selectorComparer from './../methods/selectorComparer';
import defaultSelector from './../methods/defaultSelector';
import defaultComparer from './../methods/defaultComparer';

class ThenByEnumerable extends IOrderedEnumerable {
    constructor(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        super(orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], selectorComparer(keySelector, comparer)));
    }
};

export default ThenByEnumerable;