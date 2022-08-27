import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { CheckBoard } from '../../types/board';

@Component({
  selector: 'cl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  background = '';

  constructor(private boardService: BoardService, private router: Router) {}

  ngOnInit(): void {
    this.boardService.currentBoard$.subscribe((board) => {
      setTimeout(() => {
        this.background = board?.image || '';
      });
    });
  }

  get boards() {
    return this.boardService.boards.array;
  }

  newBoard() {
    this.boardService.newBoard().subscribe((board) => {
      this.router.navigate([`/board/${board.uid}`]);
    });
  }
}
