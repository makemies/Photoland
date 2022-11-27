import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandscapePageRoutingModule } from './landscape-routing.module';

import { LandscapePage } from './landscape.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandscapePageRoutingModule
  ],
  declarations: [LandscapePage]
})
export class LandscapePageModule {}
