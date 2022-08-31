import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { randomHexColor } from 'src/app/utils/random';
import { ArrayMap } from '../types/array-map';
import { CheckBoard, CheckList } from '../types/board';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  // boards$ = new BehaviorSubject<CheckBoard[]>([
  // {
  //   uid: '1',
  //   title: 'Board 1',
  //   color: 'blue',
  //   image:
  //     'https://images.unsplash.com/photo-1661363171393-0a98051a3e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
  //   lists: [
  //     {
  //       uid: '11',
  //       boardUid: '1',
  //       title: 'List 1',
  //       items: [
  //         {
  //           uid: '111',
  //           listUid: '11',
  //           checked: false,
  //           body: 'Item 1',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   uid: '2',
  //   title: 'Board 2',
  //   color: 'blue',
  //   image:
  //     'https://images.unsplash.com/photo-1661410188636-e187e06d66d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80',
  //   lists: [
  //     {
  //       uid: '21',
  //       boardUid: '2',
  //       title: 'List 1',
  //       items: [
  //         {
  //           uid: '211',
  //           listUid: '21',
  //           checked: false,
  //           body: 'Item 1',
  //         },
  //       ],
  //     },
  //     {
  //       uid: '22',
  //       boardUid: '2',
  //       title: 'List 2',
  //       items: [
  //         {
  //           uid: '221',
  //           listUid: '22',
  //           checked: false,
  //           body: 'Item 2',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // ]);
  boards = new ArrayMap<CheckBoard>('uid');
  currentBoard$ = new BehaviorSubject<CheckBoard | undefined>(undefined);

  constructor() {
    const board1 = new CheckBoard(
      '1',
      'Sky',
      '#00b1f1',
      'https://images.unsplash.com/photo-1488965015547-e349b9b11707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'cloud'
    );
    board1.lists.add(new CheckList('11', 'List 1', board1));
    this.boards.add(board1);

    this.boards.add(
      new CheckBoard(
        '2',
        'Spring',
        '#dd4d3e',
        'https://images.unsplash.com/photo-1433259651738-0e74537aa8b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        'sun'
      )
    );

    this.boards.add(
      new CheckBoard(
        '3',
        'Leaves',
        '#699c2e',
        'https://images.unsplash.com/photo-1613408181923-f058a1b0e00c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
        'trees'
      )
    );

    this.boards.add(
      new CheckBoard(
        '4',
        'Emojis',
        '#f59734',
        'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80',
        'smile'
      )
    );

    this.boards.add(
      new CheckBoard(
        '5',
        'Night',
        '#075882',
        'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
        'moon'
      )
    );

    this.boards.add(
      new CheckBoard(
        '6',
        'Sunset',
        '#c340a9',
        'https://images.unsplash.com/photo-1575195372639-373ecc8590f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'sunset'
      )
    );
    
    this.boards.add(
      new CheckBoard(
        '7',
        'Test',
        '#c340a9',
        'https://images.unsplash.com/photo-1575195372639-373ecc8590f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        'sunset'
      )
    );
  }

  get currentBoard() {
    return this.currentBoard$.value;
  }

  getBoard(uid: string) {
    return this.boards.get(uid);
  }

  newBoard() {
    return new Observable<CheckBoard>((subscriber) => {
      const count = this.boards.length + 1;
      const color = randomHexColor();

      const newBoard = new CheckBoard(String(count), '', color);
      this.boards.add(newBoard);

      subscriber.next(newBoard);
      subscriber.complete();
    });
  }
}
