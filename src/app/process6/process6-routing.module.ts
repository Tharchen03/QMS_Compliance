import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process6Page } from './process6.page';

const routes: Routes = [
  {
    path: '',
    component: Process6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process6PageRoutingModule {}
