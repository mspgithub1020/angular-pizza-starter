import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
<<<<<<< HEAD
import { CommentItemModule } from './comment-item.module';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


=======
import { CommentItemComponent } from './comment-item.component';
>>>>>>> 6b6c711d166adf17a696f3c6d56009521f7ae352
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
<<<<<<< HEAD
    CommentItemModule,
    MatExpansionModule,
    MatIconModule
=======
>>>>>>> 6b6c711d166adf17a696f3c6d56009521f7ae352
  ]
})
export class CommentListModule { }
