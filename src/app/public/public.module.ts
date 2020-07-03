import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';
import { PublicLayoutModule } from './layout/public-layout.module';

@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    PublicRoutingModule,
    PublicLayoutModule,
  ]
})
export class PublicModule {}
