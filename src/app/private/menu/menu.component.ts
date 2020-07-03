import { Component } from '@angular/core';

@Component({
  selector: 'ps-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css'],
})

export class MenuComponent {
 // @Input para cambiar el estado del sidenav
 // Cuando se pulse en un enlace se cierre el sidenav
 // Cuando se cierre el sidenav notifica con un @Output de que se ha cerrado
 // [MenuItems] y pintas todos con un ngFor (label, link, icon)
}
