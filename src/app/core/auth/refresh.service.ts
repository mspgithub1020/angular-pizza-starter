import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
import { AuthService } from './auth.service';
@Injectable()
export class RefreshService extends HTTPService {
  constructor(http: HttpClient, private authService: AuthService) {
    super(http, 'refresh');
  }
  refresh() {
    return this.http.post(this.resolve(), null, {
      withCredentials: true
    });
  }
  autoLogin(){
    this.refresh().toPromise().then((data: {token: string}) => {
      this.authService.token = data.token;
    }).catch(()=> {});
  }
}
