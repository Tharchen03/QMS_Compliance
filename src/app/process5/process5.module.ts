import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Process5PageRoutingModule } from './process5-routing.module';

import { Process5Page } from './process5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Process5PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Process5Page]
})
export class Process5PageModule {}
