import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KotiPage } from './koti.page';

const routes: Routes = [
  {
    path: '',
    component: KotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KotiPageRoutingModule {}
