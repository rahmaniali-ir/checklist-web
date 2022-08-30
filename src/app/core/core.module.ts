import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConComponent } from './i-con/i-con.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [IConComponent, IconPickerComponent, ColorPickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [IConComponent, IconPickerComponent, ColorPickerComponent],
})
export class CoreModule {}
