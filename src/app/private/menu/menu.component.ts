import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { menuOptionsToken, menuOptionsProvider } from './menu-options.provider';
@Component({
  selector: 'ps-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [menuOptionsProvider],
})
export class MenuComponent {
  @Input() opened = true;
  @Output() openedChange = new EventEmitter<boolean>();
  constructor(@Inject(menuOptionsToken) public menuOptions) {}
  close() {
    this.opened = false;
    this.openedChange.emit(false);
  }
}
