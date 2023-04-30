import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraftPageRoutingModule } from './draft-routing.module';

import { DraftPage } from './draft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraftPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DraftPage]
})
export class DraftPageModule {}
