import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'ps-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css'],
})

export class MenuComponent {
  @Input() 
  sidenav: MenuComponent;

  @Output()
  myEvent = new EventEmitter();
  onClick(){
    this.myEvent.emit(new EventEmitter());
  }
  
  
  
}
 // @Input para cambiar el estado del sidenav
 // Cuando se pulse en un enlace se cierre el sidenav
 // Cuando se cierre el sidenav notifica con un @Output de que se ha cerrado
 // [MenuItems] y pintas todos con un ngFor (label, link, icon)

