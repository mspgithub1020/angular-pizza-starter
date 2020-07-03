import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {}
