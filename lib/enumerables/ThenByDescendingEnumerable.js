import IOrderedEnumerable from './IOrderedEnumerable';

import thenByComparer from './../methods/thenByComparer';
import selectorComparer from './../methods/selectorComparer';
import defaultSelector from './../methods/defaultSelector';
import defaultComparer from './../methods/defaultComparer';
import descendingComparer from './../methods/descendingComparer';

class ThenByDescendingEnumerable extends IOrderedEnumerable {
    constructor(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        super(orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], descendingComparer(selectorComparer(keySelector, comparer))));
    }
};

export default ThenByDescendingEnumerable;