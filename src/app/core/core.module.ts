import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConComponent } from './i-con/i-con.component';

@NgModule({
  declarations: [IConComponent],
  imports: [CommonModule],
  exports: [IConComponent],
})
export class CoreModule {}
