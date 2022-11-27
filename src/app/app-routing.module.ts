import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/animals/animals.module').then(m => m.AnimalsPageModule)
  },
  {
    path: 'landscape',
    loadChildren: () => import('./pages/landscape/landscape.module').then(m => m.LandscapePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'koti',
    loadChildren: () => import('./pages/koti/koti.module').then( m => m.KotiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
