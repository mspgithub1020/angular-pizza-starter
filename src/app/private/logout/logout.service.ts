import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable()
export class LogoutService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'logout');
  }
  logout(){
    // TODO: si devuelve 401 refrescar y reintentar
    return this.http.post(this.resolve(), null).toPromise();
  }
}

