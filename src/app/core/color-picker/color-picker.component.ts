import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass'],
})
export class ColorPickerComponent implements OnInit {
  @Input() title = 'Select Color';

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Input() selected?: string;
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return [
      '#00b1f1',
      '#dd4d3e',
      '#699c2e',
      '#f59734',
      '#075882',
      '#c340a9',
      '#00c29d',
    ];
  }

  private close() {
    this.open = false;
    this.openChange.emit(false);
  }

  toggleOpen() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  select(color: string) {
    this.selected = color;
    this.selectedChange.emit(this.selected);
    this.close();
  }
}
