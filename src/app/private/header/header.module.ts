import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
