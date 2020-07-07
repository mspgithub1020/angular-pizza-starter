import { Component , Input } from '@angular/core';


@Component({
    selector: 'ps-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
 
export class CommentItemComponent{

    @Input() comments: [];
    
}