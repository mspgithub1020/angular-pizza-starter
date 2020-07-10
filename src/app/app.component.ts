import { Component, OnInit } from '@angular/core';
import { RefreshService } from './core/auth/refresh.service';

@Component({
  selector: 'ps-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private refreshService: RefreshService){}
  ngOnInit(){
    this.refreshService.autoLogin();
  }
}
