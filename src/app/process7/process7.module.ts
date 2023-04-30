import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process7PageRoutingModule } from './process7-routing.module';

import { Process7Page } from './process7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process7PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process7Page]
})
export class Process7PageModule {}
