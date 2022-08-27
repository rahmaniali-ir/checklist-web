import { Component, Input, OnInit } from '@angular/core';
import { CheckList } from '../../types/board';

@Component({
  selector: 'cl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  @Input() list?: CheckList;

  constructor() {}

  ngOnInit(): void {}

  get title() {
    return this.list?.title || '';
  }

  get items() {
    return this.list?.items.array || [];
  }

  newItem() {
    this.list?.items.add({
      uid: '111',
      body: 'New item',
      checked: false,
      list: this.list,
    });
  }
}
