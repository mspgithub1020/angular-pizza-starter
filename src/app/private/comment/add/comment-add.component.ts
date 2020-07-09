import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorsService } from '../../../core/validation/errors.service';
import { CommentService } from '../services/comment-http.service';

@Component({
    selector: 'ps-comment-add',
    templateUrl: './comment-add.component.html',
    styleUrls: ['./comment-add.component.css']
})

export class CommentAddComponent{
  // TODO:input con el id de la pizza
    @ViewChild('form') private form: NgForm;

    model = {
        score: '',
        text: ''
    };

    constructor(
        public errorsService: ErrorsService,
        private commentService: CommentService,
    ) { }

    onSubmit() {
        if (this.form.invalid) {
          return;
        }
        // TODO: mas el id de la pizza
        this.commentService.create(this.model)
          .then(this.onCommentSuccess)
          .catch(this.onCommentError);
    }

    onCommentSuccess(){

    }

    onCommentError(){

    }

}
