import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PublicLayoutComponent } from './public-layout.component';


@NgModule({
  declarations: [PublicLayoutComponent],
  imports: [    
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class PublicLayoutModule { }
