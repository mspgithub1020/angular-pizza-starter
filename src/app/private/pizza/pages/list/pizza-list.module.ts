import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaRoutingModule } from '../../pizza.routing';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    PizzaRoutingModule
  ],
})
export class PizzaListModule {}
