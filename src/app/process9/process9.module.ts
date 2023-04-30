import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process9PageRoutingModule } from './process9-routing.module';

import { Process9Page } from './process9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process9PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process9Page]
})
export class Process9PageModule {}
