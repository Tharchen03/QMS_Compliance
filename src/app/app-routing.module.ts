import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then( m=> m.AuthPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'process1',
    loadChildren: () => import('./process1/process1.module').then( m => m.Process1PageModule)
  },
  {
    path: 'process2',
    loadChildren: () => import('./process2/process2.module').then( m => m.Process2PageModule)
  },  
  {
    path: 'process3',
    loadChildren: () => import('./process3/process3.module').then( m => m.Process3PageModule)
  },
  {
    path: 'process4',
    loadChildren: () => import('./process4/process4.module').then( m => m.Process4PageModule)
  },
  {
    path: 'process5',
    loadChildren: () => import('./process5/process5.module').then( m => m.Process5PageModule)
  },
  {
    path: 'process6',
    loadChildren: () => import('./process6/process6.module').then( m => m.Process6PageModule)
  },
  {
    path: 'process7',
    loadChildren: () => import('./process7/process7.module').then( m => m.Process7PageModule)
  },
  {
    path: 'process8',
    loadChildren: () => import('./process8/process8.module').then( m => m.Process8PageModule)
  },
  {
    path: 'process9',
    loadChildren: () => import('./process9/process9.module').then( m => m.Process9PageModule)
  },
  {
    path: 'process10',
    loadChildren: () => import('./process10/process10.module').then( m => m.Process10PageModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then( m => m.DraftPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
