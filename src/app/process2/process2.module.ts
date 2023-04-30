import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process2PageRoutingModule } from './process2-routing.module';

import { Process2Page } from './process2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process2Page]
})
export class Process2PageModule {}
