import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconName, icons } from './icons';

@Component({
  selector: 'i-con',
  template: '<i [innerHTML]="html"></i>',
  styleUrls: ['./i-con.component.sass'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IConComponent {
  svg = '';

  @Input()
  set name(value: IconName | undefined) {
    this.svg = value ? icons[value] : '';
  }

  constructor(private sanitizer: DomSanitizer) {}

  get html() {
    return this.sanitizer.bypassSecurityTrustHtml(this.svg);
  }
}
