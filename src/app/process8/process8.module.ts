import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process8PageRoutingModule } from './process8-routing.module';

import { Process8Page } from './process8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process8PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process8Page]
})
export class Process8PageModule {}
