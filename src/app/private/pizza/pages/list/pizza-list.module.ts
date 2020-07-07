import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PizzaListComponent } from './pizza-list.component';
@NgModule({
  declarations: [PizzaListComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatCardModule
  ],
  exports: [PizzaListComponent],
  providers: [PizzaListComponent],
})
export class PizzaListModule {}
