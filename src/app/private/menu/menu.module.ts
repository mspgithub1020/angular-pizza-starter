import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],

  exports: [MenuComponent],
})
export class MenuModule {}
