import { Injectable, Inject } from '@angular/core';
import { Pizza } from '../pizza';
import { ENVIRONMENT, environment } from 'src/app/core/env/env.provider';

@Injectable()
export class PizzaImgService {
  constructor(@Inject(ENVIRONMENT) private env: environment) { }
  calculate(pizza: Pizza) {
    return this.env.serverURL + pizza.img;
  }
}
