import { environment } from 'src/environments/environment';
import { InjectionToken } from '@angular/core';

export type environment = typeof environment;

export const ENVIRONMENT = new InjectionToken<environment>('env', {
  providedIn: 'root',
  factory: () => environment
});
