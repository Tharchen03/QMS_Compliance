import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process10PageRoutingModule } from './process10-routing.module';

import { Process10Page } from './process10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process10PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process10Page]
})
export class Process10PageModule {}
