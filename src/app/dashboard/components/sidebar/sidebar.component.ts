import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'cl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  constructor(private boardService: BoardService, private router: Router) {}

  ngOnInit(): void {}

  get boards() {
    return this.boardService.boards.array;
  }

  get currentBoard() {
    return this.boardService.currentBoard;
  }

  trackByUid(index: number) {
    return this.boards ? this.boards[index].uid : '';
  }

  newBoard() {
    this.boardService.newBoard().subscribe((board) => {
      this.router.navigate([`/board/${board.uid}`]);
    });
  }
}
