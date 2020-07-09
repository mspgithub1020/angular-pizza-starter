import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../../services/pizza-list.service';
import { Pizza } from '../../pizza';


@Component({
  selector: 'ps-pizzalist',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaService],
})
export class PizzaListComponent implements OnInit {
  // pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService, private router: Router) {}
  pizzas: any;

  ngOnInit() {
    this.getPizzas();
  }
  getPizzas() {
    this.pizzaService.getAll().then((pizzas) => {
      this.pizzas = pizzas;
    });
  }
  onPizzaClick(pizza: Pizza) {
    return this.pizzaService.get(`/pizzas/${pizza.id}`)
  }
  getPizzaImg(pizza: Pizza) {
    return `http://localhost:3005${pizza.img}`;

  }
}
