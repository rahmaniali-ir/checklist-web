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
      const board = new CheckBoard('', '', randomHexColor(), '', 'board');

      this.api.post<CheckBoard>('board', board.JSON).subscribe({
        next: (newBoard) => {
          board.uid = newBoard.uid;
          this.boards.add(board);

          subscriber.next(board);
          subscriber.complete();
        },
        error: (err) => {},
      });
    });
  }

  deleteBoard(uid: string) {
    return new Observable((o) => {
      this.api.delete('board/' + uid).subscribe({
        next: () => {
          this.boards.remove(uid);

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
}
