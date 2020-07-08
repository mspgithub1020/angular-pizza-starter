import { Component, OnInit, Input,  } from '@angular/core';
import { PizzaService } from '../../services/pizza-list.service';
import { Pizza } from './pizzas'

@Component({
  selector: 'ps-pizzalist',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent {
  @Input() pizza: Pizza[] = [];
}
