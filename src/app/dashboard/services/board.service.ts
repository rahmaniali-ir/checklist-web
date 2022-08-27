import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
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
    const board1 = new CheckBoard('1', 'Board 1');
    board1.lists.add(new CheckList('11', 'List 1', board1));

    this.boards.add(board1, new CheckBoard('2', 'Board 2'));
  }

  getBoard(uid: string) {
    return this.boards.get(uid);
  }

  newBoard() {
    return new Observable<CheckBoard>((subscriber) => {
      const count = this.boards.length + 1;
      const newBoard = new CheckBoard(String(count));
      this.boards.add(newBoard);

      subscriber.next(newBoard);
      subscriber.complete();
    });
  }
}
