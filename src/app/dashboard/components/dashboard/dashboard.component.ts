import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { CheckBoard } from '../../types/board';

@Component({
  selector: 'cl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  currentBoard?: CheckBoard;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.fetchBoards().subscribe();

    this.boardService.currentBoard$.subscribe((board) => {
      setTimeout(() => {
        this.currentBoard = board;
      });
    });
  }

  get backgroundColor() {
    return this.currentBoard ? this.currentBoard?.color : '';
  }

  get background() {
    return this.currentBoard ? this.currentBoard?.image : '';
  }
}
