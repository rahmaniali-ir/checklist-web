import { IconName } from 'src/app/core/i-con/icons';
import { ArrayMap } from './array-map';

export interface CheckItem {
  uid: string;
  list?: CheckList;
  body: string;
  checked: boolean;
}

export class CheckList {
  uid: string;
  board?: CheckBoard;
  title: string;
  items = new ArrayMap<CheckItem>('uid');
  color?: string;

  constructor(uid: string, title: string = '', board: CheckBoard | undefined) {
    this.uid = uid;
    this.title = title;
    this.board = board;
  }
}

export class CheckBoard {
  uid: string;
  title: string;
  color: string;
  lists = new ArrayMap<CheckList>('uid');
  icon?: IconName;
  image?: string;

  constructor(
    uid: string,
    title: string = '',
    color: string = '',
    image: string = '',
    icon: IconName = 'board'
  ) {
    this.uid = uid;
    this.title = title;
    this.color = color;
    this.image = image;
    this.icon = icon;
  }
}
