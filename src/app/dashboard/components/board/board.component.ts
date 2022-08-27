import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { CheckBoard, CheckList } from '../../types/board';

@Component({
  selector: 'cl-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  board?: CheckBoard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.loadBoard();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadBoard();
      }
    });
  }

  get image() {
    return this.board?.image || '';
  }

  get title() {
    return this.board?.title || '';
  }

  get lists() {
    return this.board?.lists.array || [];
  }

  private loadBoard() {
    const { uid } = this.route.snapshot.params as { uid: string };

    if (uid) {
      this.board = this.boardService.getBoard(uid);
      this.boardService.currentBoard$.next(this.board);
    }
  }

  newList() {
    // console.log(this.board?.lists.remove('11'));
    // console.log(this.board?.lists.exists('12'));

    this.board?.lists.add(new CheckList('12', '', this.board));
  }
}
