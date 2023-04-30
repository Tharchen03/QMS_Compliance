import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process2Page } from './process2.page';

const routes: Routes = [
  {
    path: '',
    component: Process2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process2PageRoutingModule {}
