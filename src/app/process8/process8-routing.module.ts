import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process8Page } from './process8.page';

const routes: Routes = [
  {
    path: '',
    component: Process8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process8PageRoutingModule {}
