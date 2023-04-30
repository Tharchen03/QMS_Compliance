import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process1Page } from './process1.page';

const routes: Routes = [
  {
    path: '',
    component: Process1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process1PageRoutingModule {}
