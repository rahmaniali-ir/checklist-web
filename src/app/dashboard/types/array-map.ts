import { BehaviorSubject } from 'rxjs';

type ArrayMapItems<T = any> = {
  [key in string]: T;
};

export class ArrayMap<T = any> {
  private _list$ = new BehaviorSubject<ArrayMapItems<T>>({});
  private _index = 'id';

  constructor(index: string) {
    this._index = index;
  }

  get array() {
    return Object.values(this._list$.value);
  }

  set array(values: T[]) {
    const newMap: ArrayMapItems<T> = {};

    values.forEach((value) => {
      newMap[this._index] = value;
    });

    this._list$.next(newMap);
  }

  get map() {
    return this._list$.value;
  }

  set map(value: ArrayMapItems) {
    this._list$.next(value);
  }

  get length() {
    return this.array.length;
  }

  exists(index: string) {
    return index in this.map;
  }

  get(index: string) {
    return this.map[index];
  }

  add(...items: T[]) {
    const newMap = { ...this.map };

    items.forEach((item: any) => {
      newMap[item[this._index]] = item;
    });

    this._list$.next(newMap);
  }

  remove(index: string) {
    if (!this.exists(index)) return undefined;

    const item: T = this.map[index];

    delete this.map[index];

    return item;
  }

  static fromArray<T>(array: T[], index: string = 'id') {
    const arrayMap = new ArrayMap(index);
    arrayMap.array = array;
    return arrayMap;
  }

  static fromMap<T>(map: ArrayMapItems<T>, index: string = 'id') {
    const arrayMap = new ArrayMap(index);
    arrayMap.map = map;
    return arrayMap;
  }
}
