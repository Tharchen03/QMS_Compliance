import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process6PageRoutingModule } from './process6-routing.module';

import { Process6Page } from './process6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process6PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process6Page]
})
export class Process6PageModule {}
