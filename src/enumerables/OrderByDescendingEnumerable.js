import IOrderedEnumerable from './IOrderedEnumerable';

import defaultSelector from './../methods/defaultSelector';
import defaultComparer from './../methods/defaultComparer';
import selectorComparer from './../methods/selectorComparer';
import descendingComparer from './../methods/descendingComparer';

class OrderByDescendingEnumerable extends IOrderedEnumerable {
    constructor(source, keySelector = defaultSelector, comparer = defaultComparer) {
        super(source, descendingComparer(selectorComparer(keySelector, comparer)));
    }
};

export default OrderByDescendingEnumerable;