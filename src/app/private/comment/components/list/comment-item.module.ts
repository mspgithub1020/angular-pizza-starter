import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentItemComponent } from './comment-item.component';

import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    CommentItemComponent
  ],
  exports: [
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class CommentItemModule {}
