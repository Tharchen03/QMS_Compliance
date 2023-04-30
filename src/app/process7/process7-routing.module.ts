import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process7Page } from './process7.page';

const routes: Routes = [
  {
    path: '',
    component: Process7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process7PageRoutingModule {}
