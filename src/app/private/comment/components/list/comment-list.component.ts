import { Component, Input } from '@angular/core';
import {Comment} from '../../comment';


@Component({
  selector: 'ps-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent {
  @Input() comments: Comment[] = [];
}
