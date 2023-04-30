import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process9Page } from './process9.page';

const routes: Routes = [
  {
    path: '',
    component: Process9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process9PageRoutingModule {}
