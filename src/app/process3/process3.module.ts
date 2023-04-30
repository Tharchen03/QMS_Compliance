import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process3PageRoutingModule } from './process3-routing.module';

import { Process3Page } from './process3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process3Page]
})
export class Process3PageModule {}
