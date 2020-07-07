import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentItemModule } from './comment-item.module';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CommentListComponent
  ],
  exports: [
    CommentListComponent
  ],
  imports: [
    CommonModule,
    CommentItemModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class CommentListModule {}
