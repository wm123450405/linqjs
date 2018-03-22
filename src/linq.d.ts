declare namespace Enumerable {
    const defaultComparer;
    const defaultEqualityComparer;
    const defaultStrictEqualityComparer;
    const defaultPredicate;
    const defaultFalsePredicate;
    const defaultExistsPredicate;
    const defaultSelector;
    const defaultKeySelector;
    const defaultValueSelector;
    const defaultParentSelector;
    const defaultChildrenSelector;
    const defaultResultSelector;
    const defaultJoinSelector;
    const defaultSameComparer;

    export function asEnumerable(obj: string) : IEnumerable<string>;
    export function asEnumerable<T>(obj: T[] | IEnumerable<T>) : IEnumerable<T>;
    export function asEnumerable<T>(obj: any) : IEnumerable<T>;
    export function asEnumerable<T, TValue>(obj: object, childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: (element: T) => TValue = defaultValueSelector): ITree<TValue>;
    export function asEnumerable<T, TValue>(obj: object, childrenSelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector): ITree<T>;
    export function asEnumerable<T, TValue>(obj: object, childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: string | number | symbol): ITree<TValue>;
    export function asEnumerable<T, TValue>(obj: object, childrenSelector: string | number | symbol, valueSelector: string | number | symbol): ITree<T>;
    export function from(obj: string) : IEnumerable<string>;
    export function from<T>(obj: T[] | IEnumerable<T>) : IEnumerable<T>;
    export function from<T>(obj: any) : IEnumerable<T>;
    export function range(start: number, count: number, step: number = 1): IEnumerable<number>;
    export function between(start: number, end: number, step: number = 1): IEnumerable<number>;
    export function repeat<T>(element: T, count: number): IEnumerable<T>;
    export function empty<T>(): IEnumerable<T>;
    export function generate<T>(generate: (index: number) => T, count: number = 0): IEnumerable<T>;

    export function noConflict(flag: boolean = false);
    export function noConflict(callback: (Enumerable) => void);

    export function where<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): IEnumerable<T>;
    export function where<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): IEnumerable<T>;

    export function select<T, TResult>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => TResult = defaultSelector): IEnumerable<TResult>;
    export function select<T, TResult>(source: T[] | IEnumerable<T>, selector: string | number | symbol): IEnumerable<TResult>;

    export function aggregate<T, TSeed, TResult>(source: T[] | IEnumerable<T>, seed: TSeed, func: (seed: TSeed, element: T, index?: number) => TSeed, resultSelector: (result: TSeed) => TResult = defaultSelector): TResult;
    export function aggregate<T, TSeed, TResult>(source: T[] | IEnumerable<T>, seed: TSeed, func: (seed: TSeed, element: T, index?: number) => TSeed, resultSelector: string | number | symbol): TResult;

    export function all<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): boolean;
    export function all<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): boolean;

    export function any<T>(source: T[] | IEnumerable<T>): boolean;
    export function any<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): boolean;
    export function any<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): boolean;

    export function asEnumerable<T>(source: T[] | IEnumerable<T>): IEnumerable<T>;

    export function average<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function average<T>(source: T[] | IEnumerable<T>, selector: string | number | symbol): number;

    export function chunk<T>(source: T[] | IEnumerable<T>, chunk, offset = 0): IEnumerable<IChunk<T>>;

    export function split<T>(source: T[] | IEnumerable<T>, splitPredicate: (element: T, index?: number) => boolean = defaultFalsePredicate): IEnumerable<IChunk<T>>;
    export function split<T>(source: T[] | IEnumerable<T>, splitPredicate: string | number | symbol | T | RegExp | any): IEnumerable<IChunk<T>>;

    export function concat<T>(source: T[] | IEnumerable<T>, ...other: T[][]): IEnumerable<T>;
    export function concat<T>(source: T[] | IEnumerable<T>, ...other: T[]): IEnumerable<T>;
    export function concat<T>(source: T[] | IEnumerable<T>, ...other: IEnumerable<T>[]): IEnumerable<T>;

    export function contains<T>(source: T[] | IEnumerable<T>, value: T): boolean;
    export function contains<T, TOther>(source: T[] | IEnumerable<T>, value: TOther, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): boolean;
    export function contains<T, TOther>(source: T[] | IEnumerable<T>, value: TOther, comparer: string | number | symbol): boolean;

    export function copyWithin<T>(source: T[] | IEnumerable<T>, target: number = 0, start: number = 0, end: number = Number.POSITIVE_INFINITY): IEnumerable<T>;

    export function count<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): number;
    export function count<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): number;

    export function defaultIfEmpty<T>(source: T[] | IEnumerable<T>, defaultValue?: T): IEnumerable<T>;

    export function distinct<T>(source: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;
    export function distinct<T>(source: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

    export function elementAt<T>(source: T[] | IEnumerable<T>, index: number): T;

    export function elementAtOrDefault<T>(source: T[] | IEnumerable<T>, index: number, defaultValue: T): T;

    export function every<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

    export function except<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
    export function except<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<T>;

    export function fill<T>(source: T[] | IEnumerable<T>, value: T, start: number = 0, end: number = Number.POSITIVE_INFINITY);

    export function filter<T, TResult>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => TResult, thisArg?: any): IEnumerable<TResult>;

    export function find<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

    export function findIndex<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

    export function findLast<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

    export function findLastIndex<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

    export function first<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
    export function first<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): T;

    export function firstOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
    export function firstOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: string | number | symbol | T | any): T;

    export function forEach<T>(source: T[] | IEnumerable<T>, action: (element: T, index?: number, source?: IEnumerable<T>) => void, thisArg?: any): void;
    export function forEach<TKey, TValue>(source: IMapEnumerable<TKey, TValue>, action: (element: TValue, key: TKey, source?: IMapEnumerable<TKey, TValue>) => void, thisArg?: any): void;

    export function each<T>(source: T[] | IEnumerable<T>, action: (element: T, index?: number) => void): IEnumerable<T>;

    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function groupBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;

    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function includes<T>(source: T[] | IEnumerable<T>, element: T, start: number = 0): boolean;

    export function indexOf<T, TOther>(source: T[] | IEnumerable<T>, element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;
    export function indexOf<T, TOther>(source: T[] | IEnumerable<T>, element: TOther, start: number = 0, comparer: string | number | symbol): number;

    export function lastIndexOf<T, TOther>(source: T[] | IEnumerable<T>, element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;
    export function lastIndexOf<T, TOther>(source: T[] | IEnumerable<T>, element: TOther, start: number = 0, comparer: string | number | symbol): number;

    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function intersect<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
    export function intersect<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<T>;

    export function join<T>(source: T[] | IEnumerable<T>, split: string): string;

    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function last<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index: number) => boolean = defaultPredicate): T;
    export function last<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): T;

    export function lastOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: (element: T, index: number) => boolean = defaultPredicate): T;
    export function lastOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: string | number | symbol | T | any): T;

    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<T, TInner, TOuterKey, TInnerKey, TResult>(source: T[] | IEnumerable<T>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function leftPad<T>(source: T[] | IEnumerable<T>, length: number, value: T): IEnumerable<T>;

    export function rightPad<T>(source: T[] | IEnumerable<T>, length: number, value: T): IEnumerable<T>;

    export function map<T, TOther>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => TOther, thisArg?: any): IEnumerable<TOther>;

    export function max<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function max<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => string): string;
    export function max<T>(source: T[] | IEnumerable<T>, selector: string | number | symbol): number | string;
    export function max<T, TResult>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function max<T, TResult>(source: T[] | IEnumerable<T>, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function max<T, TResult>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function max<T, TResult>(source: T[] | IEnumerable<T>, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function maxOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function maxOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: (element: T, index?: number) => string): string;
    export function maxOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: string | number | symbol): number | string;
    export function maxOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function maxOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function maxOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function maxOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function min<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function min<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => string): string;
    export function min<T>(source: T[] | IEnumerable<T>, selector: string | number | symbol): number | string;
    export function min<T, TResult>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function min<T, TResult>(source: T[] | IEnumerable<T>, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function min<T, TResult>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function min<T, TResult>(source: T[] | IEnumerable<T>, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function minOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function minOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: (element: T, index?: number) => string): string;
    export function minOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: number, selector: string | number | symbol): number | string;
    export function minOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function minOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function minOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function minOrDefault<T, TResult>(source: T[] | IEnumerable<T>, defaultValue: TResult, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function ofType<T, TResult>(source: T[] | IEnumerable<T>, type: string): IEnumerable<TResult>;
    export function ofType<T, TResult>(source: T[] | IEnumerable<T>, type: any): IEnumerable<TResult>;

    export function orderBy<T, TKey>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function orderBy<T, TKey>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function orderBy<T, TKey>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
    export function orderBy<T, TKey>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

    export function orderByDescending<T, TKey>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function orderByDescending<T, TKey>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function orderByDescending<T, TKey>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
    export function orderByDescending<T, TKey>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

    export function pop<T>(source: T[] | IEnumerable<T>): T;

    export function product<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function product<T>(source: T[] | IEnumerable<T>, selector: string | number | symbol): number;

    export function push<T>(source: T[] | IEnumerable<T>, ...values: T[]): number;

    export function rand<T>(source: T[] | IEnumerable<T>, count: number): IEnumerable<T>;

    export function reduce<T, TSeed>(source: T[] | IEnumerable<T>, callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

    export function reduceRight<T, TSeed>(source: T[] | IEnumerable<T>, callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

    export function reverse<T>(source: T[] | IEnumerable<T>): IEnumerable<T>;

    export function selectMany<T, TElement, TResult>(source: T[] | IEnumerable<T>, collectionSelector: (element: T, index?: number) => TElement[] | IEnumerable<TElement> = defaultSelector, resultSelector: (sourceElement: T, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;
    export function selectMany<T, TElement, TResult>(source: T[] | IEnumerable<T>, collectionSelector: string | number | symbol, resultSelector: (sourceElement: T, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;

    export function sequenceEqual<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): boolean;
    export function sequenceEqual<T, TOther>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): boolean;

    export function shift<T>(source: T[] | IEnumerable<T>): T;

    export function single<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
    export function single<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): T;

    export function singleOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
    export function singleOrDefault<T>(source: T[] | IEnumerable<T>, defaultValue: T, predicate: string | number | symbol | T | any): T;

    export function skip<T>(source: T[] | IEnumerable<T>, count: number): IEnumerable<T>;

    export function skipWhile<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean): IEnumerable<T>;
    export function skipWhile<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): IEnumerable<T>;

    export function take<T>(source: T[] | IEnumerable<T>, count: number): IEnumerable<T>;

    export function takeWhile<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean): IEnumerable<T>;
    export function takeWhile<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any): IEnumerable<T>;

    export function slice<T>(source: T[] | IEnumerable<T>, start: number, end: number): IEnumerable<T>;

    export function some<T>(source: T[] | IEnumerable<T>, callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

    export function sort<T>(source: T[] | IEnumerable<T>, comparer: (element: T, other: T) => number = defaultComparer): IEnumerable<T>;
    export function sort<T>(source: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

    export function sum<T>(source: T[] | IEnumerable<T>, selector: (element: T, index?: number) => number = defaultSelector): number;
    export function sum<T>(source: T[] | IEnumerable<T>, selector: string | number | symbol): number;

    export function union<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;
    export function union<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

    export function unshift<T>(source: T[] | IEnumerable<T>, ...values: T[]): number;

    export function zip<T, TOther, TResult>(source: T[] | IEnumerable<T>, other: TOther[] | IEnumerable<TOther>, resultSelector: (element: T, other: TOther) => TResult): IEnumerable<TResult>;

    export function wipe<T>(source: T[] | IEnumerable<T>, predicate: (element: T, index?: number) => boolean = defaultPredicate, count: number = 0): IEnumerable<T>;
    export function wipe<T>(source: T[] | IEnumerable<T>, predicate: string | number | symbol | T | any, count: number = 0): IEnumerable<T>;

    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
    export function nearBy<T, TKey, TElement, TResult>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;

    export function separate<T, TResult>(source: T[] | IEnumerable<T>, childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: (element: T) => TResult = defaultValueSelector): IEnumerable<TResult>;
    export function separate<T, TResult>(source: T[] | IEnumerable<T>, childrenSelector: string | number | symbol, valueSelector: (element: T) => TResult = defaultValueSelector): IEnumerable<TResult>;
    export function separate<T, TResult>(source: T[] | IEnumerable<T>, childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: string | number | symbol): IEnumerable<TResult>;
    export function separate<T, TResult>(source: T[] | IEnumerable<T>, childrenSelector: string | number | symbol, valueSelector: string | number | symbol): IEnumerable<TResult>;

    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
    export function combine<T, TKey, TValue>(source: T[] | IEnumerable<T>, parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;

    export function isSub<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): boolean;
    export function isSub<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: string | number | symbol): boolean;

    export function isSuper<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): boolean;
    export function isSuper<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: string | number | symbol): boolean;

    export function symmetric<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): IEnumerable<T>;
    export function symmetric<T>(source: T[] | IEnumerable<T>, other: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

    export function toArray<T>(source: T[] | IEnumerable<T>): T[];

    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;

    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<T, TKey, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;

    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;
    export function toObject<T, TValue>(source: T[] | IEnumerable<T>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;

    export function toPreOrder<T>(source: T[] | IEnumerable<T>): BinaryTree<T>;
    export function toInOrder<T>(source: T[] | IEnumerable<T>): BinaryTree<T>;
    export function toPostOrder<T>(source: T[] | IEnumerable<T>): BinaryTree<T>;

    export function thenBy<T, TKey>(source: IOrderedEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function thenBy<T, TKey>(source: IOrderedEnumerable<T>, keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function thenBy<T, TKey>(source: IOrderedEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
    export function thenBy<T, TKey>(source: IOrderedEnumerable<T>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

    export function thenByDescending<T, TKey>(source: IOrderedEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function thenByDescending<T, TKey>(source: IOrderedEnumerable<T>, keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
    export function thenByDescending<T, TKey>(source: IOrderedEnumerable<T>, keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
    export function thenByDescending<T, TKey>(source: IOrderedEnumerable<T>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

    class Exception extends Error {
        constructor(message: string);
    }

    class NoSuchElementsException extends Exception {
        constructor();
    }
    class OutOfRangeException extends Exception {
        constructor(index: number);
    }
    class TooManyElementsException extends Exception {
        constructor();
    }
    class KeysForMultiElementsException extends Exception {
        constructor(key: any);
    }
    class NeedExecuteBeforeException extends Exception {
        constructor(methodName: string);
    }
    class PropertyExpressionInvalidException extends Exception{
        constructor(property: string);
    }
    class InvalidFunctionException extends Exception {
        constructor(fun: any);
    }
    class PluginRepeatException extends Exception {
        constructor(plugin: Plugin, builtin = false);
    }
    class NotAncestorOfException<TValue> extends Exception {
        constructor(ancestor:ITree<TValue>, descendant:ITree<TValue>)
    }

    export const exceptions: {
        readonly NoSuchElementsException: NoSuchElementsException;
        readonly OutOfRangeException: OutOfRangeException;
        readonly TooManyElementsException: TooManyElementsException;
        readonly KeysForMultiElementsException: KeysForMultiElementsException;
        readonly NeedExecuteBeforeException: NeedExecuteBeforeException;
        readonly PropertyExpressionInvalidException: PropertyExpressionInvalidException;
        readonly InvalidFunctionException: InvalidFunctionException;
        readonly PluginRepeatException: PluginRepeatException;
        readonly NotAncestorOfException: NotAncestorOfException;
    };
    export const comparers: {
        readonly default: (element: any, other: any) => number;
        readonly equality: (element: any, other: any) => boolean;
        readonly same: (element: any, other: any) => boolean;
        readonly strict: (element: any, other: any) => boolean;
        array<T, TArray>(array: TArray[] | IEnumerable<TArray>, last: boolean = false, comparer: (element: TArray, other: T) => boolean = defaultEqualityComparer): (element: T, other: T) => number;
        array<T, TArray>(array: TArray[] | IEnumerable<TArray>, last: boolean = false, comparer: string | number | symbol): (element: T, other: T) => number;
        predicate<T>(predicateArray: ((element: T) => boolean)[] | IEnumerable<(element: T) => boolean>, last = false): (element: T, other: T) => number;
        greater<T>(greaterThen: (element: T, other: T) => boolean, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): (element: T, other: T) => number;
        greater<T>(greaterThen: (element: T, other: T) => boolean, comparer: string | number | symbol): (element: T, other: T) => number;
        less<T>(greaterThen: (element: T, other: T) => boolean, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): (element: T, other: T) => number;
        less<T>(greaterThen: (element: T, other: T) => boolean, comparer: string | number | symbol): (element: T, other: T) => number;
        ignoreCase(): (element: string, other: string) => boolean;
        ignoreCase<T>(selector: (element: T) => string = defaultSelector): (element: T, other: T) => boolean;
        ignoreCase<T>(selector: string | number | symbol): (element: T, other: T) => boolean;
    };

    export const selectors: {
        readonly default: (element: any, index?: number) => any;
        readonly key: (element: any, index?: number) => any;
        readonly value: (element: any, index?: number) => any;
        readonly result: (element: any, index?: number) => any;
        readonly join: (element: any, index?: number) => any;
        property<T, TResult>(property: string): (element: T, index?: number) => TResult;
    };

    export const actions: {
        readonly default: (element: any, index?: number) => void;
    };

    export var config: {
        readonly extends: {
            array: boolean;
            object: boolean;
            string: boolean;
            lazy: boolean;
        };
        as: string;
    };

    export const predicates: {
        readonly default: (element: any) => boolean;
        readonly exists: (element: any) => boolean;
        selector<T, TResult>(selector: (element: T, index?: number) => TResult, predicate: (element: TResult) => boolean = defaultExistsPredicate): (element: T, index?: number) => boolean;
        selector<T, TResult>(selector: string | number | symbol, predicate: (element: TResult) => boolean = defaultExistsPredicate): (element: T, index?: number) => boolean;
        selector<T, TResult>(selector: (element: T, index?: number) => TResult, predicate: string | number | symbol | T | any): (element: T, index?: number) => boolean;
        selector<T, TResult>(selector: string | number | symbol, predicate: string | number | symbol | T | any): (element: T, index?: number) => boolean;
        not<T>(predicate: (element: T, index?: number) => boolean = defaultExistsPredicate): (element: T, index?: number) => boolean;
        not<T>(predicate: string | number | symbol | T | any): (element: T, index?: number) => boolean;
        equality<T, TOther>(value: TOther, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): (element: T, index?: number) => boolean;
        equality<T, TOther>(value: TOther, comparer: string | number | symbol): (element: T, index?: number) => boolean;
        strict<T>(value: T): (element: T, index?: number) => boolean;
        same<T>(value: T): (element: T, index?: number) => boolean;
        regexp(regexp: RegExp): (element: string, index?: number) => boolean;
        regexp<T>(regexp: RegExp, keySelector: (element: T, index?: number) => string = defaultSelector): (element: T, index?: number) => boolean;
        regexp<T>(regexp: RegExp, keySelector: string | number | symbol): (element: T, index?: number) => boolean;
    };

    export interface IEnumerable<T> {
        readonly length: number;
        readonly size: number;

        where(predicate: (element: T, index?: number) => boolean = defaultPredicate): IEnumerable<T>;
        where(predicate: string | number | symbol | T | any): IEnumerable<T>;

        select<TResult>(selector: (element: T, index?: number) => TResult = defaultSelector): IEnumerable<TResult>;
        select<TResult>(selector: string | number | symbol): IEnumerable<TResult>;

        aggregate<TSeed, TResult>(seed: TSeed, func: (seed: TSeed, element: T, index?: number) => TSeed, resultSelector: (result: TSeed) => TResult = defaultSelector): TResult;
        aggregate<TSeed, TResult>(seed: TSeed, func: (seed: TSeed, element: T, index?: number) => TSeed, resultSelector: string | number | symbol): TResult;

        all(predicate: (element: T, index?: number) => boolean = defaultPredicate): boolean;
        all(predicate: string | number | symbol | T | any): boolean;

        any(): boolean;
        any(predicate: (element: T, index?: number) => boolean = defaultPredicate): boolean;
        any(predicate: string | number | symbol | T | any): boolean;

        asEnumerable(): IEnumerable<T>;
        asEnumerable<TValue>(childrenSelector: (element: T, index?: number) => T[] | IEnumerable<T>, valueSelector: (element: TValue, index?: number) => TValue = defaultValueSelector): ITree<TValue>;
        asEnumerable<TValue>(childrenSelector: (element: T, index?: number) => T[] | IEnumerable<T>, valueSelector: string | number | symbol): ITree<TValue>;
        asEnumerable<TValue>(childrenSelector: string | number | symbol, valueSelector: (element: TValue, index?: number) => TValue = defaultValueSelector): ITree<TValue>;
        asEnumerable<TValue>(childrenSelector: string | number | symbol, valueSelector: string | number | symbol): ITree<TValue>;

        average(selector: (element: T, index?: number) => number = defaultSelector): number;
        average(selector: string | number | symbol): number;

        chunk(chunk, offset = 0): IEnumerable<IChunk<T>>;

        split(splitPredicate: (element: T, index?: number) => boolean = defaultFalsePredicate): IEnumerable<IChunk<T>>;
        split(splitPredicate: string | number | symbol | T | RegExp | any): IEnumerable<IChunk<T>>;

        concat(...other: T[][]): IEnumerable<T>;
        concat(...other: T[]): IEnumerable<T>;
        concat(...other: IEnumerable<T>[]): IEnumerable<T>;

        contains(value: T): boolean;
        contains<TOther>(value: TOther, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): boolean;
        contains<TOther>(value: TOther, comparer: string | number | symbol): boolean;

        copyWithin(target: number = 0, start: number = 0, end: number = Number.POSITIVE_INFINITY): IEnumerable<T>;

        count(predicate: (element: T, index?: number) => boolean = defaultPredicate): number;
        count(predicate: string | number | symbol | T | any): number;

        defaultIfEmpty(defaultValue?: T): IEnumerable<T>;

        distinct(comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;
        distinct(comparer: string | number | symbol): IEnumerable<T>;

        elementAt(index: number): T;

        elementAtOrDefault(index: number, defaultValue: T): T;

        every(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

        except<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
        except<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<T>;

        fill(value: T, start: number = 0, end: number = Number.POSITIVE_INFINITY);

        filter<TResult>(callback: (element: T, index?: number, source?: IEnumerable<T>) => TResult, thisArg?: any): IEnumerable<TResult>;

        find(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

        findIndex(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

        findLast(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

        findLastIndex(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

        first(predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
        first(predicate: string | number | symbol | T | any): T;

        firstOrDefault(defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
        firstOrDefault(defaultValue: T, predicate: string | number | symbol | T | any): T;

        forEach(action: (element: T, index?: number, source?: IEnumerable<T>) => void, thisArg?: any): void;

        each(action: (element: T, index?: number) => void): IEnumerable<T>;

        groupBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        groupBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;

        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

        includes(element: T, start: number = 0): boolean;

        indexOf<TOther>(element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;
        indexOf<TOther>(element: TOther, start: number = 0, comparer: string | number | symbol): number;

        lastIndexOf<TOther>(element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;
        lastIndexOf<TOther>(element: TOther, start: number = 0, comparer: string | number | symbol): number;

        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

        intersect<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
        intersect<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<T>;

        join(split: string): string;

        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

        last(predicate: (element: T, index: number) => boolean = defaultPredicate): T;
        last(predicate: string | number | symbol | T | any): T;

        lastOrDefault(defaultValue: T, predicate: (element: T, index: number) => boolean = defaultPredicate): T;
        lastOrDefault(defaultValue: T, predicate: string | number | symbol | T | any): T;

        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

        leftPad(length: number, value: T): IEnumerable<T>;

        rightPad(length: number, value: T): IEnumerable<T>;

        map<TOther>(callback: (element: T, index?: number, source?: IEnumerable<T>) => TOther, thisArg?: any): IEnumerable<TOther>;

        max(selector: (element: T, index?: number) => number = defaultSelector): number;
        max(selector: (element: T, index?: number) => string): string;
        max(selector: string | number | symbol): number | string;
        max<TResult>(selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
        max<TResult>(selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
        max<TResult>(selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
        max<TResult>(selector: string | number | symbol, comparer: string | number | symbol): TResult;

        maxOrDefault(defaultValue: number, selector: (element: T, index?: number) => number = defaultSelector): number;
        maxOrDefault(defaultValue: number, selector: (element: T, index?: number) => string): string;
        maxOrDefault(defaultValue: number, selector: string | number | symbol): number | string;
        maxOrDefault<TResult>(defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
        maxOrDefault<TResult>(defaultValue: TResult, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
        maxOrDefault<TResult>(defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
        maxOrDefault<TResult>(defaultValue: TResult, selector: string | number | symbol, comparer: string | number | symbol): TResult;

        min(selector: (element: T, index?: number) => number = defaultSelector): number;
        min(selector: (element: T, index?: number) => string): string;
        min(selector: string | number | symbol): number | string;
        min<TResult>(selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
        min<TResult>(selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
        min<TResult>(selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
        min<TResult>(selector: string | number | symbol, comparer: string | number | symbol): TResult;

        minOrDefault(defaultValue: number, selector: (element: T, index?: number) => number = defaultSelector): number;
        minOrDefault(defaultValue: number, selector: (element: T, index?: number) => string): string;
        minOrDefault(defaultValue: number, selector: string | number | symbol): number | string;
        minOrDefault<TResult>(defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
        minOrDefault<TResult>(defaultValue: TResult, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
        minOrDefault<TResult>(defaultValue: TResult, selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
        minOrDefault<TResult>(defaultValue: TResult, selector: string | number | symbol, comparer: string | number | symbol): TResult;

        ofType<TResult>(type: string): IEnumerable<TResult>;
        ofType<TResult>(type: any): IEnumerable<TResult>;

        orderBy<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        orderBy<TKey>(keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        orderBy<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
        orderBy<TKey>(keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

        orderByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

        pop(): T;

        product(selector: (element: T, index?: number) => number = defaultSelector): number;
        product(selector: string | number | symbol): number;

        push(...values: T[]): number;

        rand(count: number): IEnumerable<T>;

        reduce<TSeed>(callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

        reduceRight<TSeed>(callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

        reverse(): IEnumerable<T>;

        selectMany<TElement, TResult>(collectionSelector: (element: T, index?: number) => TElement[] | IEnumerable<TElement> = defaultSelector, resultSelector: (sourceElement: T, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;
        selectMany<TElement, TResult>(collectionSelector: string | number | symbol, resultSelector: (sourceElement: T, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;

        sequenceEqual<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): boolean;
        sequenceEqual<TOther>(other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): boolean;

        shift(): T;

        single(predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
        single(predicate: string | number | symbol | T | any): T;

        singleOrDefault(defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;
        singleOrDefault(defaultValue: T, predicate: string | number | symbol | T | any): T;

        skip(count: number): IEnumerable<T>;

        skipWhile(predicate: (element: T, index?: number) => boolean): IEnumerable<T>;
        skipWhile(predicate: string | number | symbol | T | any): IEnumerable<T>;

        take(count: number): IEnumerable<T>;

        takeWhile(predicate: (element: T, index?: number) => boolean): IEnumerable<T>;
        takeWhile(predicate: string | number | symbol | T | any): IEnumerable<T>;

        slice(start: number, end: number): IEnumerable<T>;

        some(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

        sort(comparer: (element: T, other: T) => number = defaultComparer): IEnumerable<T>;
        sort(comparer: string | number | symbol): IEnumerable<T>;

        sum(selector: (element: T, index?: number) => number = defaultSelector): number;
        sum(selector: string | number | symbol): number;

        union(other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;
        union(other: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

        unshift(...values: T[]): number;

        zip<TOther, TResult>(other: TOther[] | IEnumerable<TOther>, resultSelector: (element: T, other: TOther) => TResult): IEnumerable<TResult>;

        wipe(predicate: (element: T, index?: number) => boolean = defaultPredicate, count: number = 0): IEnumerable<T>;
        wipe(predicate: string | number | symbol | T | any, count: number = 0): IEnumerable<T>;

        nearBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;
        nearBy<TKey, TElement, TResult>(keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<T>>;

        separate<TResult>(childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: (element: T) => TResult = defaultValueSelector): IEnumerable<TResult>;
        separate<TResult>(childrenSelector: string | number | symbol, valueSelector: (element: T) => TResult = defaultValueSelector): IEnumerable<TResult>;
        separate<TResult>(childrenSelector: (element: T) => T[] | IEnumerable<T> = defaultChildrenSelector, valueSelector: string | number | symbol): IEnumerable<TResult>;
        separate<TResult>(childrenSelector: string | number | symbol, valueSelector: string | number | symbol): IEnumerable<TResult>;

        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: (element: T) => TValue = defaultValueSelector, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: (element: T) => TKey = defaultKeySelector, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: (element: T) => TKey = defaultParentSelector, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;
        combine<TKey, TValue>(parentSelector: string | number | symbol, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol): IEnumerable<ICombine<TKey, TValue>>;

        isSub(other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): boolean;
        isSub(other: T[] | IEnumerable<T>, comparer: string | number | symbol): boolean;

        isSuper(other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): boolean;
        isSuper(other: T[] | IEnumerable<T>, comparer: string | number | symbol): boolean;

        symmetric(other: T[] | IEnumerable<T>, comparer: (element: T, other: T) => boolean): IEnumerable<T>;
        symmetric(other: T[] | IEnumerable<T>, comparer: string | number | symbol): IEnumerable<T>;

        toArray(): T[];

        toDirectory<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;
        toDirectory<TKey, TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;

        toLookup<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;
        toLookup<TKey, TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;

        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : object;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : object;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : object;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : object;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : object;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : object;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: string | number | symbol) : object;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : object;

        toPreOrder(): BinaryTree<T>;
        toInOrder(): BinaryTree<T>;
        toPostOrder(): BinaryTree<T>;
    }

    export class Entry<TKey, TValue> {

        readonly key: TKey;

        readonly value: TValue;

    }

    export interface IMapEnumerable<TKey, TValue> extends IEnumerable<Entry<TKey, TValue>> {

        forEach(action: (element: TValue, key: TKey, source: IMapEnumerable<TKey, TValue>) => void, thisArg?: any): void;

    }

    export interface Directory<TKey, TValue> extends IMapEnumerable<TKey, TValue> {

        delete(key: TKey, comparer: (element: TKey, other: TKey) => boolean): boolean;

        get(key: TKey, comparer: (element: TKey, other: TKey) => boolean): TValue;

        has(key: TKey, comparer: (element: TKey, other: TKey) => boolean): boolean;

        set(key: TKey, value: TValue, comparer: (element: TKey, other: TKey) => boolean): Directory<TKey, TValue>;

    }

    export interface Lookup<TKey, TElement> extends Directory<TKey, IEnumerable<TElement>> {

        set(key: TKey, value: IEnumerable<TElement>, comparer: (element: TKey, other: TKey) => boolean): Lookup<TKey, TElement>;
    }

    export interface IOrderedEnumerable<T> extends IEnumerable<T> {

        thenBy<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        thenBy<TKey>(keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        thenBy<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
        thenBy<TKey>(keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

        thenByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: string | number | symbol, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<T>;

    }

    export interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {

        readonly key: TKey

    }

    export interface IChunk<T> extends IEnumerable<T> {

        readonly index: number;

    }

    export interface ITree<TValue> extends IEnumerable<ITree<TValue>> {

        readonly value: TValue;
        readonly children: IEnumerable<ITree<TValue>>;
        readonly values: IEnumerable<TValue>;

        getChild(index: number): ITree<TValue>;
        getValue(index: number): TValue;

        breadthTraverse(): IEnumerable<TValue>;
        breadthSearch(predicate: (element: TValue) => boolean = defaultPredicate): IEnumerable<TValue>;
        breadthSearch(predicate: string | number | symbol | TValue | any): IEnumerable<TValue>;
        breadthSubTree(predicate: (element: TValue) => boolean): IEnumerable<ITree<TValue>>;
        breadthSubTree(predicate: string | number | symbol | TValue | any): IEnumerable<ITree<TValue>>;
        depthTraverse(): IEnumerable<TValue>;
        depthSearch(predicate: (element: TValue) => boolean = defaultPredicate): IEnumerable<TValue>;
        depthSearch(predicate: string | number | symbol | TValue | any): IEnumerable<TValue>;
        depthSubTree(predicate: (element: TValue) => boolean): IEnumerable<ITree<TValue>>;
        depthSubTree(predicate: string | number | symbol | TValue | any): IEnumerable<ITree<TValue>>;

        lowestAncestor(...nodes: (ITree<TValue> | TValue)[]): TValue;

        isChildOf(root: ITree<TValue>): boolean;
        isParentOf(node: ITree<TValue> | TValue): boolean;

        isDescendantOf(root: ITree<TValue>): boolean;
        isAncestorOf(node: ITree<TValue> | TValue): boolean;

        path(root: ITree<TValue>): IEnumerable<TValue>;
        pathTo(node: ITree<TValue> | TValue): IEnumerable<TValue>;

        getParent(node: ITree<TValue> | TValue): TValue;

        degree(predicate: (element: TValue) => boolean = defaultPredicate): number;
        degree(predicate: string | number | symbol | TValue | any): number;

        depth(predicate: (element: TValue) => boolean = defaultPredicate): number;
        depth(predicate: string | number | symbol | TValue | any): number;

        isBinary(): boolean;

        isFullBinary(): boolean;

        isCompleteBinary(): boolean;

        isPerfectBinary(): boolean;

        asBinary(): BinaryTree<TValue>;

        toValue<TObjValue>(childrenName: string = 'children', valueSelector: (value: TValue) => TObjValue): TObjValue;

    }

    export interface BinaryTree<TValue> extends ITree<TValue> {

        readonly left: BinaryTree<TValue>;
        readonly right: BinaryTree<TValue>;

        hasLeft(): boolean;

        hasRight(): boolean;

        preOrder(): IEnumerable<TValue>;

        inOrder(): IEnumerable<TValue>;

        postOrder(): IEnumerable<TValue>;
    }

    export interface ICombine<TKey, TValue> extends IEnumerable<ICombine<TKey, TValue>>, ITree<TValue> {

        readonly key: TKey;
        readonly parent: TKey;

        readonly children: IEnumerable<ICombine<TKey, TValue>>;

    }

    class Plugin {
        name: string;
        value: (source: IEnumerable<>, ...params: any[]) => any
    }
}

export = Enumerable;
export as namespace Enumerable;