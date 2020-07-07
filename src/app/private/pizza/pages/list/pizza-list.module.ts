import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza-list.component';

@NgModule({
  declarations: [PizzaListComponent],
  imports: [MatButtonModule, MatIconModule, RouterModule],
  exports: [PizzaListComponent],
  providers: [PizzaListComponent],
})
export class PizzaListModule {}
