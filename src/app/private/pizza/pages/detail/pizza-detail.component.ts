import { Component, OnInit, OnDestroy } from '@angular/core';
import { PizzaService } from '../../services/pizza-http.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ps-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
  providers: [PizzaService]
})
export class PizzaDetailComponent implements OnInit, OnDestroy {

  public pizza: any;
  private subs: Subscription;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.subs = this.route.params.subscribe((params: Params) => {
      this.getPizza(params.id);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  getPizza(id) {
    this.pizzaService.get(id)
      .then((pizza) => {
        this.pizza = pizza;
      });
  }
}
