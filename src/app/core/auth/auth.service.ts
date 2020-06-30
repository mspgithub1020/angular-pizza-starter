import { Injectable } from '@angular/core';
import { SessionStorageService } from '../storage/session-storage.service';

const TOKEN = 'auth_token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private sessionStorageService: SessionStorageService) { }
  get token() {
    return this.sessionStorageService.get(TOKEN);
  }
  set token(value) {
    if (!value) {
      this.clear();
    } else {
      this.sessionStorageService.set(TOKEN, value);
    }
  }
  clear() {
    this.sessionStorageService.remove(TOKEN);
  }
  get isAuthenticated() {
    return Boolean(this.token);
  }
}
