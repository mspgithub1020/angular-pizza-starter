import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./pages/add/pizza-add.module').then(m => m.PizzaAddModule),

  },
   {
    path: 'pizza',
    loadChildren: () => import('./pages/list/pizza-list.module').then(m => m.PizzaListModule),

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
