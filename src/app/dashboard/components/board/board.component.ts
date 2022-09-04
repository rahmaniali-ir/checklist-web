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
    this.boardService.deleteBoard(this.board.uid).subscribe();
  }

  newList() {
    this.board?.lists.add(new CheckList('12', '', this.board));
  }
}
