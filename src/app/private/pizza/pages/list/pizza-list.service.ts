import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable()
export class PizzaListService extends HTTPService {


  constructor(http: HttpClient) {
    super(http, 'pizza');
  }

  getAll() {
    return this.http.get(this.resolve()).toPromise();
  }
}

