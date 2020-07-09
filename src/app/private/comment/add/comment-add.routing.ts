import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentAddComponent } from './comment-add.component';

const routes: Routes = [
    {
        path: '',
        component: CommentAddComponent,
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
