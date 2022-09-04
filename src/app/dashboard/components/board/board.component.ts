import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { BoardService } from '../../services/board.service';
import { CheckBoard, CheckList } from '../../types/board';

@Component({
  selector: 'cl-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  board!: CheckBoard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.loadBoard();
  }

  get image() {
    return this.board.image || '';
  }

  get title() {
    return this.board.title || '';
  }

  get lists() {
    return this.board?.lists.array || [];
  }

  private loadBoard() {
    this.route.params.subscribe((params) => {
      const uid: string = params['uid'];

      if (!uid || !this.boardService.boards.exists(uid)) {
        this.router.navigate(['/']);
        return;
      }

      this.board = this.boardService.getBoard(uid);
      this.boardService.currentBoard$.next(this.board);
    });
  }

  deleteBoard() {
    const index = this.boardService.boards.getIndex(this.board.uid);

    this.boardService.deleteBoard(this.board.uid).subscribe(() => {
      if (!this.boardService.boards.length) {
        this.router.navigate(['/']);
        return;
      }

      const previousIndex = Math.max(0, index - 1);
      const neighborBoard = this.boardService.boards.array[previousIndex];
      this.router.navigate(['/board/' + neighborBoard.uid]);
    });
  }

  newList() {
    this.board?.lists.add(new CheckList('12', '', this.board));
  }
}
