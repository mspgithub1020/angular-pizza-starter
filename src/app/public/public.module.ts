import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';
import { PublicLayoutComponent } from './layout/public-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PublicComponent,
    PublicLayoutComponent
  ],
  imports: [
    PublicRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class PublicModule {}
