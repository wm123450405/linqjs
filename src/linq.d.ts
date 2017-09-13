declare namespace Enumerable {
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

    export interface IEnumerable<T> {
        where(predicate: (element: T, index: number) => boolean): IEnumerable<T>;
        where(predicate: string): IEnumerable<T>;
        where(predicate: number): IEnumerable<T>;
        where(predicate: T): IEnumerable<T>;
        where(predicate: any): IEnumerable<T>;

        select<TResult>(selector: (element: T, index: number) => TResult): IEnumerable<TResult>;
        select<TResult>(selector: string): IEnumerable<TResult>;
        select<TResult>(selector: number): IEnumerable<TResult>;

        toArray(): T[];
    }
}

export = Enumerable;
export as namespace Enumerable;