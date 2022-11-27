import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandscapePage } from './landscape.page';

const routes: Routes = [
  {
    path: '',
    component: LandscapePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandscapePageRoutingModule {}
