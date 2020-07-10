import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizza-add.component';


const routes: Routes = [
  {
    path: '',
    component: PizzaAddComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaAddRoutingModule { }