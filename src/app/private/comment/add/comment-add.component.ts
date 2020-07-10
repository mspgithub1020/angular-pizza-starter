import { Component, ViewChild, Input } from '@angular/core';
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
    @Input() id: string;

    @ViewChild('form') private form: NgForm;

    model = {
        score: '',
        text: ''
    };

    errors = {
        score: {
            required: 'La puntuación de la pizza es requerida'
        },
        text: {
            required: 'Debe incluir comentarios'
        },
    };

    constructor(
        public errorsService: ErrorsService,
        private commentService: CommentService,
    ) { }

    createComment(){
        // TODO: mas el id de la pizza
        this.commentService.create(this.model)
          .then(this.onCommentSuccess)
          .catch(this.onCommentError);
    }


    onSubmit() {
        if (this.form.invalid) {
          return;
        }
        this.createComment();
    }

    onCommentSuccess(){

    }

    onCommentError(){

    }

}
