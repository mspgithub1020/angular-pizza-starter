import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [PrivateRoutingModule]
})
export class PrivateModule {}
