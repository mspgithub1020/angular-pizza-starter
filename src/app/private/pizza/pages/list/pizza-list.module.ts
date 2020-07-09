import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaListRoutingModule } from './pizza-list.routing';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    PizzaListRoutingModule,
    CommonModule,
    MatCardModule,
    ]
})
export class PizzaListModule {}
