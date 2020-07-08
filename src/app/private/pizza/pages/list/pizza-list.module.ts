import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaRoutingModule } from '../../pizza.routing';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    PizzaRoutingModule],
  exports: [PizzaListComponent],
  providers: [PizzaListComponent],
})
export class PizzaListModule {}
