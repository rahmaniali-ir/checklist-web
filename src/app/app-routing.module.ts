import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './dashboard/components/board/board.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/components/pages/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OverviewComponent,
      },
      {
        path: 'board/:uid',
        component: BoardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
