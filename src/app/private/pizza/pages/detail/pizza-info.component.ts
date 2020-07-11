import { Component, Input, Inject } from '@angular/core';
import { ENVIRONMENT, environment } from 'src/app/core/env/env.provider';

@Component({
  selector: 'ps-pizza-info',
  templateUrl: './pizza-info.component.html',
  styleUrls: ['./pizza-info.component.css'],
})
export class PizzaInfoComponent {
  @Input() pizza;
  constructor(@Inject(ENVIRONMENT) private env: environment) {}
  getImg() {
    return this.env.serverURL + this.pizza.img;
  }
  shouldPrintDivider(i: number) {
    return i < this.pizza.ingredients.length - 1;
  }
  getPrice() {
    // let total = 0;
    // for (let ing of this.pizza.ingredients){
    //   total = total + ing.prize;
    // }
    return this.pizza.ingredients.reduce((total, ing) => total + ing.prize, 0);
  }
}
