import { Component , Input } from '@angular/core';


@Component({
    selector: 'ps-comment-item',
    templateUrl: './comment-item.component.html',
    styleUrls: ['./comment-item.component.css']
})
 
export class CommentItemComponent{

    @Input() comentario : any = {};







}