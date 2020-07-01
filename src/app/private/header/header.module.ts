import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRoutingModule } from 'src/app/public/register/register.routing';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule,
    HeaderComponent,
  ],
})
export class HeaderModule {}
