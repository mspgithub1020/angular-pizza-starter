import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CommentItemComponent } from './comment-item.component';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentItemComponent,     
  ],
  exports: [
    CommentListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,       
    MatIconModule
    
  ]
})
export class CommentListModule { }
