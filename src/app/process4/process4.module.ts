import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process4PageRoutingModule } from './process4-routing.module';

import { Process4Page } from './process4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process4PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process4Page]
})
export class Process4PageModule {}
