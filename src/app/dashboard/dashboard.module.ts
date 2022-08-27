import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent,
    ListComponent,
    ItemComponent,
  ],
  imports: [CommonModule, RouterModule, CoreModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
