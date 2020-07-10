import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LogoutModule } from '../logout/logout.module';
@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, LogoutModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
