import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LogoutComponent } from './logout.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LogoutComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,

  ],
  exports: [LogoutComponent],
})
export class LogoutModule {}
