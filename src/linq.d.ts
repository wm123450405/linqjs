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
        array<T, TArray>(array: TArray[] | IEnumerable<TArray>, last: boolean = false, comparer: (element: TArray, other: T) => boolean): (element: T, other: T) => number;
        predicate<T>(predicateArray: ((element: T) => boolean)[] | IEnumerable<(element: T) => boolean>, last = false): (element: T, other: T) => number;
        greater<T>(greaterThen: (element: T, other: T) => boolean, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): (element: T, other: T) => number;
        less<T>(greaterThen: (element: T, other: T) => boolean, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): (element: T, other: T) => number;
        ignoreCase(): (element: string, other: string) => boolean;
        ignoreCase<T>(selector: (element: T) => string = defaultSelector): (element: T, other: T) => boolean;
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
        };
        as: string;
    };

    export const predicates: {
        readonly default: (element: any) => boolean;
        readonly exists: (element: any) => boolean;
        selector<T, TResult>(selector: ((element: T, index?: number) => TResult) | string, predicate: (element: TResult) => boolean = defaultExistsPredicate): (element: T, index?: number) => boolean;
        not<T>(predicate: ((element: T, index?: number) => boolean) | string = defaultExistsPredicate): (element: T, index?: number) => boolean;
        equality<T, TOther>(value: TOther, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): (element: T, index?: number) => boolean;
        strict<T>(value: T): (element: T, index?: number) => boolean;
        same<T>(value: T): (element: T, index?: number) => boolean;
        regexp(regexp: RegExp): (element: string, index?: number) => boolean;
        regexp<T>(regexp: RegExp, keySelector: (element: T, index?: number) => string = defaultSelector): (element: T, index?: number) => boolean;
    };

    export interface IEnumerable<T> {
        where(predicate: ((element: T, index?: number) => boolean) | string | number | symbol | T | any = defaultPredicate): IEnumerable<T>;

        select<TResult>(selector: ((element: T, index?: number) => TResult) | string | number | symbol = defaultSelector): IEnumerable<TResult>;

        aggregate<TSeed, TResult>(seed: TSeed, func: (seed: TSeed, element: T, index?: number) => TSeed, resultSelector: (result: TSeed) => TResult = defaultSelector): TResult;

        all(predicate: ((element: T, index?: number) => boolean) | string | number | symbol = defaultPredicate): boolean;

        any(): boolean;
        any(predicate: ((element: T, index?: number) => boolean) | string | number | symbol = defaultPredicate): boolean;

        asEnumerable(): IEnumerable<T>;

        average(selector: (element: T, index?: number) => number = defaultSelector): number;

        chunk(chunk, offset = 0): IEnumerable<IChunk<T>>;

        concat(...other: T[][]): IEnumerable<T>;
        concat(...other: T[]): IEnumerable<T>;
        concat(...other: IEnumerable<T>[]): IEnumerable<T>;

        contains(value: T): boolean;
        contains<TOther>(value: TOther, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): boolean;

        copyWithin(target: number = 0, start: number = 0, end: number = Number.POSITIVE_INFINITY): IEnumerable<T>;

        count(predicate: (element: T, index?: number) => boolean = defaultPredicate): number;

        defaultIfEmpty(defaultValue?: T): IEnumerable<T>;

        distinct(comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;

        elementAt(index: number): T;

        elementAtOrDefault(index: number, defaultValue: T): T;

        every(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

        except<TOther>(other: TOther[], comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
        except<TOther>(other: IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;

        fill(value: T, start: number = 0, end: number = Number.POSITIVE_INFINITY);

        filter<TResult>(callback: (element: T, index?: number, source?: IEnumerable<T>) => TResult, thisArg?: any): IEnumerable<TResult>;

        find(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

        findIndex(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

        findLast(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): T;

        findLastIndex(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): number;

        first(predicate: (element: T, index?: number) => boolean = defaultPredicate): T;

        firstOrDefault(defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;

        forEach(action: (element: T, index?: number, source?: IEnumerable<T>) => void, thisArg?: any): void;

        groupBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;

        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[], resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;

        includes(element: T, start: number = 0): boolean;

        indexOf<TOther>(element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;

        lastIndexOf<TOther>(element: TOther, start: number = 0, comparer: (element: T, other: TOther) => boolean = defaultStrictEqualityComparer): number;

        innerJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;

        intersect<TOther>(other: TOther[], comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;
        intersect<TOther>(other: IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean = defaultEqualityComparer): IEnumerable<T>;

        join(split: string): string;

        join<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[], resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        join<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, resultSelector: (element: T, other: TInner) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;

        last(predicate: (element: T, index: number) => boolean = defaultPredicate): T;

        lastOrDefault(defaultValue: T, predicate: (element: T, index: number) => boolean = defaultPredicate): T;

        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[], resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        leftJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;

        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: TInner[], resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;
        rightJoin<TInner, TOuterKey, TInnerKey, TResult>(inner: IEnumerable<TInner>, resultSelector: (element: T, grouping: IGrouping<TOuterKey, TInner>) => TResult = defaultJoinSelector, outerKeySelect: (element: T, index?: number) => TOuterKey = defaultKeySelector, innerKeySelect: (element: TInner, index?: number) => TInnerKey = defaultKeySelector, comparer: (key: TOuterKey, other: TInnerKey) => boolean = defaultEqualityComparer): IEnumerable<TResult>;

        leftPad(length: number, value: T): IEnumerable<T>;

        rightPad(length: number, value: T): IEnumerable<T>;

        map<TOther>(callback: (element: T, index?: number, source?: IEnumerable<T>) => TOther, thisArg?: any): IEnumerable<TOther>;

        max(selector: (element: T, index?: number) => number = defaultSelector): number;
        max(selector: (element: T, index?: number) => string): string;
        max<TResult>(selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;

        min(selector: (element: T, index?: number) => number = defaultSelector): number;
        min(selector: (element: T, index?: number) => string): string;
        min<TResult>(selector: (element: T, index?: number) => TResult, comparer: (element: TResult, other: TResult) => number): TResult;

        ofType<TResult>(type: string): IEnumerable<TResult>;
        ofType<TResult>(type: any): IEnumerable<TResult>;

        orderBy<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;

        orderByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;

        pop(): T;

        product(selector: (element: T, index?: number) => number = defaultSelector): number;

        push(...values: T[]): number;

        rand(count: number): IEnumerable<T>;

        reduce<TSeed>(callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

        reduceRight<TSeed>(callback: (seed: TSeed, element: T, index?: number) => TSeed, initialValue: TSeed): TSeed;

        reverse(): IEnumerable<T>;

        selectMany<TElement, TResult>(collectionSelector: (element: T, index?: number) => IEnumerable<TElement>, resultSelector: (sourceElement: T, collectionElement: TElement) => TResult): IEnumerable<TResult>;
        selectMany<TElement, TResult>(collectionSelector: (element: T, index?: number) => TElement[], resultSelector: (sourceElement: T, collectionElement: TElement) => TResult): IEnumerable<TResult>;

        sequenceEqual<TOther>(other: TOther[], comparer: (element: T, other: TOther) => boolean): boolean;
        sequenceEqual<TOther>(other: IEnumerable<TOther>, comparer: (element: T, other: TOther) => boolean): boolean;

        shift(): T;

        single(predicate: (element: T, index?: number) => boolean = defaultPredicate): T;

        singleOrDefault(defaultValue: T, predicate: (element: T, index?: number) => boolean = defaultPredicate): T;

        skip(count: number): IEnumerable<T>;

        skipWhile(predicate: (element: T, index?: number) => boolean): IEnumerable<T>;

        take(count: number): IEnumerable<T>;

        takeWhile(predicate: (element: T, index?: number) => boolean): IEnumerable<T>;

        slice(start: number, end: number): IEnumerable<T>;

        some(callback: (element: T, index?: number, source?: IEnumerable<T>) => boolean, thisArg?: any): boolean;

        sort(comparer: (element: T, other: T) => number = defaultComparer): IEnumerable<T>;

        sum(selector: (element: T, index?: number) => number = defaultSelector): number;

        union(other: T[], comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;
        union(other: IEnumerable<T>, comparer: (element: T, other: T) => boolean = defaultEqualityComparer): IEnumerable<T>;

        unshift(...values: T[]): number;

        zip<TOther, TResult>(other: TOther[], resultSelector: (element: T, other: TOther) => TResult): IEnumerable<TResult>;
        zip<TOther, TResult>(other: IEnumerable<TOther>, resultSelector: (element: T, other: TOther) => TResult): IEnumerable<TResult>;

        wipe(predicate: (element: T, index?: number) => boolean = defaultPredicate, count: number = 0): IEnumerable<T>;

        nearBy<TKey, TElement, TResult>(keySelector: (element: T, index?: number) => TKey = defaultKeySelector, elementSelector: (element: T, index?: number) => TElement = defaultValueSelector, resultSelector: (key: TKey, grouping: IGrouping<TKey, TElement>) => TResult = defaultResultSelector, comparer: (key: TKey, other: TKey) => boolean = defaultEqualityComparer): IEnumerable<IGrouping<T>>;

        toArray(): T[];

        toDirectory<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean) : Directory<TKey, TValue>;

        toLookup<TKey, TValue>(keySelector: (element: T, index?: number) => TKey, valueSelector: (element: T, index?: number) => TValue, comparer: (element: TKey, other: TKey) => boolean) : Lookup<TKey, TValue>;

        toObject<TValue>(keySelector: (element: T, index?: number) => string, valueSelector: (element: T, index?: number) => TValue, comparer: (element: string, other: string) => boolean) : any;
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

        thenByDescending<TKey>(keySelector: (element: T, index?: number) => TKey = defaultSelector, comparer: (element: T, other: T) => number = defaultComparer): IOrderedEnumerable<T>;

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