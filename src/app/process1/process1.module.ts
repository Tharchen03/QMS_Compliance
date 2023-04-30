import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process1PageRoutingModule } from './process1-routing.module';

import { Process1Page } from './process1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process1Page]
})
export class Process1PageModule {}
