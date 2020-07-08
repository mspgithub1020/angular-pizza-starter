import { Component, Input } from '@angular/core';
import { Comment } from '../../comment';

const icons = {
  light: 'star_border',
  dark: 'star'  
};
const classes = {
  light: 'icon--light',
  dark: 'icon--dark'
}

@Component({
  selector: 'ps-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})

export class CommentItemComponent {

  @Input() comment: Comment;

  getStars(score) {
    const color = [];
    const limit = 10;
    const dif = limit - score;
    for (let i = 0; i < limit; i++) {
      const type = i < dif ? 'dark' : 'light';
      color.push({
        icon: icons[type],
        className: classes[type]
      });
    }
    return color;
  }

  getIconClasses(color){
    return 'icon--${color}';
  }
  
  getIcon(color){
    return color === 'dark' ? 'star' : 'star_border'
  }

}


/*
MODIFICAMOS LA LOGICA , TRABAJAMOS LA LOGICA DE LAS STARS DESDE LA CLASE

  getStars(score) {
    const color = [];
    const limit = 10;
    const dif = limit - score;
    for (let i = 0; i < limit; i++) {
      color.push(i < dif ? 'dark' : 'light');
    }
    return color;
  }

Y EVITAMOS EL USO EN HTML DE:

  <mat-icon *ngFor="let color of getStars(comment.score)" class="icon--{{color}}">
    <ng-container *ngIf="color==='dark'; else light">
            star
    </ng-container>
    <ng-template #light>
            star_border
    </ng-template>
  </mat-icon>

*/