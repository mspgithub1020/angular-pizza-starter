import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LogoutComponent } from './logout.component'

@NgModule({
  declarations: [LogoutComponent],
  imports: [MatButtonModule, MatIconModule],
  exports: [LogoutComponent],
})
export class LogoutModule {}
