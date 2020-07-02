import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [    
    MatButtonModule,
    MatIconModule
  ]
})
export class ToolbarModule { }
