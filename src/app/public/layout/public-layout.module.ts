import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PublicLayoutComponent } from './public-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PublicLayoutComponent],
  imports: [
    RouterModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [PublicLayoutComponent]
})
export class PublicLayoutModule { }
