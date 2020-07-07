
import { Component, Input } from '@angular/core';
import { Pizza } from './pizzas';

@Component({
  selector: 'ps-pizzalist',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent {
  @Input() pizzas: Pizza[] = [];

}
