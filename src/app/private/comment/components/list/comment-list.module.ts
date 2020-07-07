import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentItemComponent } from './comment-item.component';
@NgModule({
  declarations: [
    CommentListComponent,
    CommentItemComponent
  ],
  exports: [
    CommentListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CommentListModule { }
