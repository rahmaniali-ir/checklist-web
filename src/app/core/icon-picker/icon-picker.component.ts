import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconName } from '../i-con/icons';
import { Emoji, emojiPack } from './emoji';

@Component({
  selector: 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.sass'],
})
export class IconPickerComponent implements OnInit {
  @Input() title = 'Select Emoji';

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Input() selected?: IconName;
  @Output() selectedChange = new EventEmitter<IconName>();

  searchKey = '';

  constructor() {}

  ngOnInit(): void {}

  get emojis(): Emoji[] {
    const key = this.searchKey.trim().toLowerCase();

    return key
      ? emojiPack.filter((emoji) => {
          return emoji.tags.some((tag) => tag.includes(key));
        })
      : emojiPack;
  }

  private close() {
    this.open = false;
    this.openChange.emit(false);
  }

  toggleOpen() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  select(emoji: Emoji) {
    this.selected = emoji.icon;
    this.selectedChange.emit(this.selected);
    this.close();
  }
}
