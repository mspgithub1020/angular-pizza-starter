import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing';

@NgModule({
  declarations: [PublicComponent],
  imports: [PublicRoutingModule]
})
export class PublicModule {}
