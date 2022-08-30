import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConComponent } from './i-con/i-con.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IConComponent, IconPickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [IConComponent, IconPickerComponent],
})
export class CoreModule {}
