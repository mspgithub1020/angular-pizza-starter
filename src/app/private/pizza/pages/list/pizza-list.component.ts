import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../../services/pizza-list.service';
import { Pizza } from '../../pizza';

@Component({
  selector: 'ps-pizzalist',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
  providers: [PizzaService]
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService, private router: Router) { }
  ngOnInit() {

  }
  getPizzas(){

  }
  onPizzaClick(pizza: Pizza){

  }
  getPizzaImg(pizza: Pizza){

  }
}
// modulo de rutas que cargue el componente en el path ''
// componente pizza-list
// utilizar el pizza-http.service para pedir todas las pizzas cuando se pinte
// el componente (ngOnInit)
// con un *ngFor tendras que pintar una card con la foto y el nombre de la pizza (img, name)
// cuando se pinche en una card tendrás que navegar a /pizzas/:id
