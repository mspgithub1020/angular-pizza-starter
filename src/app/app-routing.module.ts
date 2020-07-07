import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/routing/auth.guard';
import { NeedsLoginGuard } from './core/routing/needs-login.guard';


const routes: Routes = [
  {
    path: 'public',
    // canActivate: [NeedsLoginGuard],
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
