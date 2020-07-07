import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentItemModule } from './comment-item.module'

@NgModule({
  declarations: [
    CommentListComponent
  ],
  exports: [
    CommentListComponent
  ],
  imports: [
    CommonModule,
    CommentItemModule
  ]
})
export class CommentListModule {}
