import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(model) {
    return this.http.post('http://localhost:3005/api/register', model).toPromise();
  }
}
