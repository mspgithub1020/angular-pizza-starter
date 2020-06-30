import {Injectable} from '@angular/core';
import {StorageManager} from './storage-manager';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends StorageManager {
  constructor(){
    super(window.localStorage);
  }
}

