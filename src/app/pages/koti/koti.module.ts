import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KotiPageRoutingModule } from './koti-routing.module';

import { KotiPage } from './koti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KotiPageRoutingModule
  ],
  declarations: [KotiPage]
})
export class KotiPageModule {}
