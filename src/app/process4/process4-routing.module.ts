import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process4Page } from './process4.page';

const routes: Routes = [
  {
    path: '',
    component: Process4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process4PageRoutingModule {}
