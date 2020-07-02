import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    MenuComponent,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule
  ],
  bootstrap: [
    MenuComponent
  ]
})
export class MenuModule {}
