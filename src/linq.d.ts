declare namespace Enumerable {
    const defaultComparer;
    const defaultEqualityComparer;
    const defaultStrictEqualityComparer;
    const defaultPredicate;
    const defaultExistsPredicate;
    const defaultSelector;
    const defaultKeySelector;
    const defaultValueSelector;
    const defaultResultSelector;
    const defaultJoinSelector;
    const defaultSameComparer;

    export function asEnumerable(obj: string) : IEnumerable<string>;
    export function asEnumerable<T>(obj: T[]) : IEnumerable<T>;
    export function asEnumerable<T>(obj: any) : IEnumerable<T>;
    export function from(obj: string) : IEnumerable<string>;
    export function from<T>(obj: T[]) : IEnumerable<T>;
    export function from<T>(obj: any) : IEnumerable<T>;
    export function range(start: number, count: number, step: number = 1): IEnumerable<number>;
    export function between(start: number, end: number, step: number = 1): IEnumerable<number>;
    export function repeat<T>(element: T, count: number): IEnumerable<T>;
    export function empty<T>(): IEnumerable<T>;
    export function generate<T>(generate: (index: number) => T, count: number = 0): IEnumerable<T>;

    export function noConflict(flag: boolean = false);
    export function noConflict(callback: (Enumerable) => void);

    export function where<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): IEnumerable<TSource>;
    export function where<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): IEnumerable<TSource>;

    export function select<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => TResult = defaultSelector): IEnumerable<TResult>;
    export function select<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): IEnumerable<TResult>;

    export function aggregate<TSource, TSeed, TResult>(source: TSource[] | IEnumerable<TSource>, seed: TSeed, func: (seed: TSeed, element: TSource, index?: number) => TSeed, resultSelector: (result: TSeed) => TResult = defaultSelector): TResult;
    export function aggregate<TSource, TSeed, TResult>(source: TSource[] | IEnumerable<TSource>, seed: TSeed, func: (seed: TSeed, element: TSource, index?: number) => TSeed, resultSelector: string | number | symbol): TResult;

    export function all<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): boolean;
    export function all<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): boolean;

    export function any<TSource>(source: TSource[] | IEnumerable<TSource>): boolean;
    export function any<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): boolean;
    export function any<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): boolean;

    export function asEnumerable<TSource>(source: TSource[] | IEnumerable<TSource>): IEnumerable<TSource>;

    export function average<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => number = defaultSelector): number;
    export function average<TSource>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): number;

    export function chunk<TSource>(source: TSource[] | IEnumerable<TSource>, chunk, offset = 0): IEnumerable<IChunk<TSource>>;

    export function concat<TSource>(source: TSource[] | IEnumerable<TSource>, ...other: TSource[][]): IEnumerable<TSource>;
    export function concat<TSource>(source: TSource[] | IEnumerable<TSource>, ...other: TSource[]): IEnumerable<TSource>;
    export function concat<TSource>(source: TSource[] | IEnumerable<TSource>, ...other: IEnumerable<TSource>[]): IEnumerable<TSource>;

    export function contains<TSource>(source: TSource[] | IEnumerable<TSource>, value: TSource): boolean;
    export function contains<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, value: TOther, comparer: (element: TSource, other: TOther) => boolean = defaultEqualityComparer): boolean;
    export function contains<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, value: TOther, comparer: string | number | symbol): boolean;

    export function copyWithin<TSource>(source: TSource[] | IEnumerable<TSource>, target: number = 0, start: number = 0, end: number = Number.POSITIVE_INFINITY): IEnumerable<TSource>;

    export function count<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): number;
    export function count<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): number;

    export function defaultIfEmpty<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue?: TSource): IEnumerable<TSource>;

    export function distinct<TSource>(source: TSource[] | IEnumerable<TSource>, comparer: (element: TSource, other: TSource) => boolean = defaultEqualityComparer): IEnumerable<TSource>;
    export function distinct<TSource>(source: TSource[] | IEnumerable<TSource>, comparer: string | number | symbol): IEnumerable<TSource>;

    export function elementAt<TSource>(source: TSource[] | IEnumerable<TSource>, index: number): TSource;

    export function elementAtOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, index: number, defaultValue: TSource): TSource;

    export function every<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): boolean;

    export function except<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: (element: TSource, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<TSource>;
    export function except<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<TSource>;

    export function fill<TSource>(source: TSource[] | IEnumerable<TSource>, value: TSource, start: number = 0, end: number = Number.POSITIVE_INFINITY);

    export function filter<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => TResult, thisArg?: any): IEnumerable<TResult>;

    export function find<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): TSource;

    export function findIndex<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): number;

    export function findLast<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): TSource;

    export function findLastIndex<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): number;

    export function first<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): TSource;
    export function first<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): TSource;

    export function firstOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): TSource;
    export function firstOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: string | number | symbol | TSource | any): TSource;

    export function forEach<TSource>(source: TSource[] | IEnumerable<TSource>, action: (element: TSource, index?: number, source?: IEnumerable<TSource>) => void, thisArg?: any): void;

    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function groupBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;

    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function groupJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function includes<TSource>(source: TSource[] | IEnumerable<TSource>, element: TSource, start: number = 0): boolean;

    export function indexOf<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, element: TOther, start: number = 0, comparer: (element: TSource, other: TOther) => boolean = defaultStrictEqualityComparer): number;
    export function indexOf<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, element: TOther, start: number = 0, comparer: string | number | symbol): number;

    export function lastIndexOf<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, element: TOther, start: number = 0, comparer: (element: TSource, other: TOther) => boolean = defaultStrictEqualityComparer): number;
    export function lastIndexOf<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, element: TOther, start: number = 0, comparer: string | number | symbol): number;

    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function innerJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function intersect<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: (element: TSource, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<TSource>;
    export function intersect<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): IEnumerable<TSource>;

    export function join<TSource>(source: TSource[] | IEnumerable<TSource>, split: string): string;

    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function join<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, other: TInner) => TResult, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function last<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index: number) => boolean = defaultPredicate): TSource;
    export function last<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): TSource;

    export function lastOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: (element: TSource, index: number) => boolean = defaultPredicate): TSource;
    export function lastOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: string | number | symbol | TSource | any): TSource;

    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function leftJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: TSource, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;
    export function rightJoin<TSource, TInner, TOuterKey, TInnerKey, TResult>(source: TSource[] | IEnumerable<TSource>, inner: TInner[] | IEnumerable<TInner>, resultSelector: (element: TSource, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: string | number | symbol, innerKeySelect: string | number | symbol, comparer: string | number | symbol): IEnumerable<TResult>;

    export function leftPad<TSource>(source: TSource[] | IEnumerable<TSource>, length: number, value: TSource): IEnumerable<TSource>;

    export function rightPad<TSource>(source: TSource[] | IEnumerable<TSource>, length: number, value: TSource): IEnumerable<TSource>;

    export function map<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => TOther, thisArg?: any): IEnumerable<TOther>;

    export function max<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => number = defaultSelector): number;
    export function max<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => string): string;
    export function max<TSource>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): number | string;
    export function max<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function max<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function max<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function max<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function min<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => number = defaultSelector): number;
    export function min<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => string): string;
    export function min<TSource>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): number | string;
    export function min<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
    export function min<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
    export function min<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => TResult, comparer: string | number | symbol): TResult;
    export function min<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol, comparer: string | number | symbol): TResult;

    export function ofType<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, type: string): IEnumerable<TResult>;
    export function ofType<TSource, TResult>(source: TSource[] | IEnumerable<TSource>, type: any): IEnumerable<TResult>;

    export function orderBy<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultSelector, comparer: (element: TSource, other: TSource) => number = defaultComparer): IOrderedEnumerable<TSource>;
    export function orderBy<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, comparer: (element: TSource, other: TSource) => number = defaultComparer): IOrderedEnumerable<TSource>;
    export function orderBy<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<TSource>;
    export function orderBy<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<TSource>;

    export function orderByDescending<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultSelector, comparer: (element: TSource, other: TSource) => number = defaultComparer): IOrderedEnumerable<TSource>;
    export function orderByDescending<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, comparer: (element: TSource, other: TSource) => number = defaultComparer): IOrderedEnumerable<TSource>;
    export function orderByDescending<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultSelector, comparer: string | number | symbol): IOrderedEnumerable<TSource>;
    export function orderByDescending<TSource, TKey>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, comparer: string | number | symbol): IOrderedEnumerable<TSource>;

    export function pop<TSource>(source: TSource[] | IEnumerable<TSource>): TSource;

    export function product<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => number = defaultSelector): number;
    export function product<TSource>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): number;

    export function push<TSource>(source: TSource[] | IEnumerable<TSource>, ...values: TSource[]): number;

    export function rand<TSource>(source: TSource[] | IEnumerable<TSource>, count: number): IEnumerable<TSource>;

    export function reduce<TSource, TSeed>(source: TSource[] | IEnumerable<TSource>, callback: (seed: TSeed, element: TSource, index?: number) => TSeed, initialValue: TSeed): TSeed;

    export function reduceRight<TSource, TSeed>(source: TSource[] | IEnumerable<TSource>, callback: (seed: TSeed, element: TSource, index?: number) => TSeed, initialValue: TSeed): TSeed;

    export function reverse<TSource>(source: TSource[] | IEnumerable<TSource>): IEnumerable<TSource>;

    export function selectMany<TSource, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, collectionSelector: (element: TSource, index?: number) => TElement[] | IEnumerable<TElement> = defaultSelector, resultSelector: (sourceElement: TSource, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;
    export function selectMany<TSource, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, collectionSelector: string | number | symbol, resultSelector: (sourceElement: TSource, collectionElement: TElement) => TResult = defaultResultSelector): IEnumerable<TResult>;

    export function sequenceEqual<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: (element: TSource, other: TOther) => boolean = defaultEqualityComparer): boolean;
    export function sequenceEqual<TSource, TOther>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, comparer: string | number | symbol): boolean;

    export function shift<TSource>(source: TSource[] | IEnumerable<TSource>): TSource;

    export function single<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): TSource;
    export function single<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): TSource;

    export function singleOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: (element: TSource, index?: number) => boolean = defaultPredicate): TSource;
    export function singleOrDefault<TSource>(source: TSource[] | IEnumerable<TSource>, defaultValue: TSource, predicate: string | number | symbol | TSource | any): TSource;

    export function skip<TSource>(source: TSource[] | IEnumerable<TSource>, count: number): IEnumerable<TSource>;

    export function skipWhile<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean): IEnumerable<TSource>;
    export function skipWhile<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): IEnumerable<TSource>;

    export function take<TSource>(source: TSource[] | IEnumerable<TSource>, count: number): IEnumerable<TSource>;

    export function takeWhile<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean): IEnumerable<TSource>;
    export function takeWhile<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any): IEnumerable<TSource>;

    export function slice<TSource>(source: TSource[] | IEnumerable<TSource>, start: number, end: number): IEnumerable<TSource>;

    export function some<TSource>(source: TSource[] | IEnumerable<TSource>, callback: (element: TSource, index?: number, source?: IEnumerable<TSource>) => boolean, thisArg?: any): boolean;

    export function sort<TSource>(source: TSource[] | IEnumerable<TSource>, comparer: (element: TSource, other: TSource) => number = defaultComparer): IEnumerable<TSource>;
    export function sort<TSource>(source: TSource[] | IEnumerable<TSource>, comparer: string | number | symbol): IEnumerable<TSource>;

    export function sum<TSource>(source: TSource[] | IEnumerable<TSource>, selector: (element: TSource, index?: number) => number = defaultSelector): number;
    export function sum<TSource>(source: TSource[] | IEnumerable<TSource>, selector: string | number | symbol): number;

    export function union<TSource>(source: TSource[] | IEnumerable<TSource>, other: TSource[] | IEnumerable<TSource>, comparer: (element: TSource, other: TSource) => boolean = defaultEqualityComparer): IEnumerable<TSource>;
    export function union<TSource>(source: TSource[] | IEnumerable<TSource>, other: TSource[] | IEnumerable<TSource>, comparer: string | number | symbol): IEnumerable<TSource>;

    export function unshift<TSource>(source: TSource[] | IEnumerable<TSource>, ...values: TSource[]): number;

    export function zip<TSource, TOther, TResult>(source: TSource[] | IEnumerable<TSource>, other: TOther[] | IEnumerable<TOther>, resultSelector: (element: TSource, other: TOther) => TResult): IEnumerable<TResult>;

    export function wipe<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: (element: TSource, index?: number) => boolean = defaultPredicate, count: number = 0): IEnumerable<TSource>;
    export function wipe<TSource>(source: TSource[] | IEnumerable<TSource>, predicate: string | number | symbol | TSource | any, count: number = 0): IEnumerable<TSource>;

    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: (element: TSource, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey = defaultKeySelector, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;
    export function nearBy<TSource, TKey, TElement, TResult>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, elementSelector: string | number | symbol, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: string | number | symbol): IEnumerable<IGrouping<TSource>>;

    export function toArray<TSource>(source: TSource[] | IEnumerable<TSource>): TSource[];

    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;
    export function toDirectory<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Directory<TKey, TValue>;

    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: TKey, other: TKey) => boolean = defaultSameComparer) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => TKey, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;
    export function toLookup<TSource, TKey, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : Lookup<TKey, TValue>;

    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => string, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => string, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => string, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: (element: TSource, index?: number) => TValue, comparer: string | number | symbol) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: (element: TSource, index?: number) => string, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;
    export function toObject<TSource, TValue>(source: TSource[] | IEnumerable<TSource>, keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;

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

    export const exceptions: {
        readonly NoSuchElementsException: NoSuchElementsException;
        readonly OutOfRangeException: OutOfRangeException;
        readonly TooManyElementsException: TooManyElementsException;
        readonly KeysForMultiElementsException: KeysForMultiElementsException;
        readonly NeedExecuteBeforeException: NeedExecuteBeforeException;
        readonly PropertyExpressionInvalidException: PropertyExpressionInvalidException;
        readonly InvalidFunctionException: InvalidFunctionException;
        readonly PluginRepeatException: PluginRepeatException;
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

    export const config: {
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

        average(selector: (element: T, index?: number) => number = defaultSelector): number;
        average(selector: string | number | symbol): number;

        chunk(chunk, offset = 0): IEnumerable<IChunk<T>>;

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

        min(selector: (element: T, index?: number) => number = defaultSelector): number;
        min(selector: (element: T, index?: number) => string): string;
        min(selector: string | number | symbol): number | string;
        min<TResult>(selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;
        min<TResult>(selector: string | number | symbol, comparer: (element: TResult, other: TResult) => number): TResult;
        min<TResult>(selector: (element: T, index?: number) => TResult, comparer: string | number | symbol): TResult;
        min<TResult>(selector: string | number | symbol, comparer: string | number | symbol): TResult;

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

        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: (element: string, other: string) => boolean = defaultSameComparer) : any;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : any;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: (element: T, index?: number) => TValue, comparer: string | number | symbol) : any;
        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;
        toObject<TValue>(keySelector: string | number | symbol, valueSelector: string | number | symbol, comparer: string | number | symbol) : any;
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

    class Plugin {
        name: string;
        value: (source: IEnumerable<>, ...params: any[]) => any
    }
}

export = Enumerable;
export as namespace Enumerable;