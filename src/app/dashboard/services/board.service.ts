import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { randomHexColor } from 'src/app/utils/random';
import { ArrayMap } from '../types/array-map';
import { CheckBoard, CheckList } from '../types/board';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  boards = new ArrayMap<CheckBoard>('uid');
  currentBoard$ = new BehaviorSubject<CheckBoard | undefined>(undefined);

  constructor(private api: ApiService) {}

  get currentBoard() {
    return this.currentBoard$.value;
  }

  fetchBoards() {
    return new Observable((o) => {
      this.api.get<CheckBoard[]>('boards').subscribe({
        next: (boards) => {
          boards.forEach((board) => {
            this.boards.add(
              new CheckBoard(
                board.uid,
                board.title,
                board.color,
                board.image,
                board.icon
              )
            );
          });

          o.next();
          o.complete();
        },
        error: (err) => {
          o.error(err);
          o.complete();
        },
      });
    });
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
