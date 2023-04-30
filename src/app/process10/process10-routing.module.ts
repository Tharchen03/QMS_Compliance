import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process10Page } from './process10.page';

const routes: Routes = [
  {
    path: '',
    component: Process10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process10PageRoutingModule {}
