import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LogoutComponent } from './logout.component'
import { RouterModule } from '@angular/router';
import { LogoutService } from './logout.service';


@NgModule({
  declarations: [LogoutComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [LogoutComponent],
  providers: [LogoutService]
})
export class LogoutModule {}
