import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CheckItem } from '../../types/board';

@Component({
  selector: 'cl-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  @Input() item?: CheckItem;
  @Output() onCheck = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  get checked() {
    return this.item?.checked || false;
  }

  get body() {
    return this.item?.body || '';
  }

  @HostListener('click')
  onClick() {
    if (!this.item) return;

    this.item.checked = !this.item.checked;
    this.onCheck.emit(this.item.checked);
  }
}
