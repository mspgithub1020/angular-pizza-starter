import { Component, Input } from '@angular/core';
import {Comment} from '../../comment';

@Component({
  selector: 'ps-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})

export class CommentItemComponent {
  @Input() comment: Comment;

  getStars(score){

    const color = [];
    const limit = 10;
    const dif = limit - score;

    for(var i = 0 ; i < limit ; i++){
      (i < dif ? color.push('black') : color.push('white'))
    }

    return color;

  }






}
