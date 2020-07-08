// usando el cliente de angular de http
// un servicio que implemente el
// get(id, opts), getAll(opts), ...

import { HttpClient } from '@angular/common/http';

export class HTTPService {
  [x: string]: any;
  constructor(
    protected http: HttpClient,
    private path: string,
  ) { }
  resolve(id?: string) {
    if (!id) {
      return this.path;
    }
    return `${this.path}/${id}`;
  }
}
