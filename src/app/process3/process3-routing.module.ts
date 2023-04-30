import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Process3Page } from './process3.page';

const routes: Routes = [
  {
    path: '',
    component: Process3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Process3PageRoutingModule {}
