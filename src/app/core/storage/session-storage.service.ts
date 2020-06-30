import {Injectable} from '@angular/core';
import {StorageManager} from './storage-manager';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService extends StorageManager {
  constructor(){
    super(window.sessionStorage);
  }
}

