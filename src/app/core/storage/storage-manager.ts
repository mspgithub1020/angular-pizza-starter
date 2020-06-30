import { InjectionToken } from '@angular/core';

export class StorageManager {
  constructor(private storage: Storage) { }
  get(key: string): any {
    const item = this.storage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}

export const LOCAL_STORAGE_MANAGER = new InjectionToken<StorageManager>('LocalStorageManager', {
  providedIn: 'root',
  factory: () => new StorageManager(window.localStorage)
});

export const SESSION_STORAGE_MANAGER = new InjectionToken<StorageManager>('SessionStorageManager', {
  providedIn: 'root',
  factory: () => new StorageManager(window.sessionStorage)
});
