import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentAddComponent } from './comment-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        CommentAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class CommentAddModule { }