import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { APIInterceptorProvider } from '../core/http/api.interceptor';
import { AuthInterceptorProvider } from './services/http/auth.interceptor';
import { HeaderModule } from './header/header.module';
import { PizzaListModule } from './pizza/pages/list/pizza-list.module';
import { CommonModule } from '@angular/common';
import { RetryInterceptorProvider } from './services/http/retry.interceptor';
import { RefreshService } from '../core/auth/refresh.service';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    PrivateRoutingModule,
    HttpClientModule,
    HeaderModule,
    CommonModule,
    PizzaListModule,
    MenuModule,
  ],
  providers: [
    APIInterceptorProvider,
    AuthInterceptorProvider,
    RetryInterceptorProvider,
    RefreshService
  ],
})
export class PrivateModule {}
