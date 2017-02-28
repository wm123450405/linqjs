import IOrderedEnumerable from './IOrderedEnumerable';

import defaultSelector from './../methods/defaultSelector';
import defaultComparer from './../methods/defaultComparer';
import selectorComparer from './../methods/selectorComparer';

class OrderByEnumerable extends IOrderedEnumerable {
    constructor(source, keySelector = defaultSelector, comparer = defaultComparer) {
        super(source, selectorComparer(keySelector, comparer));
    }
};

export default OrderByEnumerable;