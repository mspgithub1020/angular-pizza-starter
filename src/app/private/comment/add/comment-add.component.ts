import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorsService } from '../../../core/validation/errors.service';
import { CommentService } from '../services/comment-http.service';

@Component({
    selector: 'ps-comment',
    templateUrl: './comment-add.component.html',
    styleUrls: ['./comment-add.component.css']
})

export class AddComponent{

    @ViewChild('form') form: FormGroup;
    @ViewChild('score') score: FormControl;
    @ViewChild('text') text: FormControl;

    model = {
        score: '',
        text: ''        
    };

    constructor(
        public errorsService: ErrorsService,
        private commentService: CommentService,
        private router: Router
    ) { }

    onSubmit() {
        if (this.form.invalid) {
          return;
        }
        this.commentService.comment(this.model)
          .then(this.onCommentSuccess)
          .catch(this.onCommentError);
    }

    onCommentSuccess(){

    }

    onCommentError(){
        
    }

}
