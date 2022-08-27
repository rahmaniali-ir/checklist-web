import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'cl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  background = '';
  backgroundColor = '';

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.currentBoard$.subscribe((board) => {
      setTimeout(() => {
        this.background = board?.image || '';
        this.backgroundColor = board?.color || '';
      });
    });
  }
}
