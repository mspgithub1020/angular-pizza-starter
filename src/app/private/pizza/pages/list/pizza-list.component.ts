import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../../services/pizza-http.service';
import { Pizza } from '../../pizza';
import { PizzaImgService } from '../../services/pizza-img.service';


@Component({
  selector: 'ps-pizzalist',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaService, PizzaImgService],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [];
  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private pizzaImgService: PizzaImgService
  ) { }

  ngOnInit() {
    this.getPizzas();
  }
  getPizzas() {
    this.pizzaService.getAll().then((pizzas: Pizza[]) => {
      this.pizzas = pizzas;
    });
  }
  onPizzaClick(pizza: Pizza) {
    return this.router.navigateByUrl(`/pizzas/${pizza.id}`);
  }
  getPizzaImg(pizza: Pizza) {
    return this.pizzaImgService.calculate(pizza);
  }
}
