import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process5Page } from './process5.page';

const routes: Routes = [
  {
    path: '',
    component: Process5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process5PageRoutingModule {}
