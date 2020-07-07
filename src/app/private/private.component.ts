import { Component } from '@angular/core';

@Component({
  selector: 'ps-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent {
  comments = [
    {
      "id": "3a230a1b-a7ee-4d90-a7ab-2ae6b1df4988",
      "text": "good",
      "created": "Tue, 02 Jun 2020 12:22:48 GMT",
      "score": 7,
      "user": {name: "test"}
    },
    {
      "id": "0b3afbd9-0229-471f-9f84-6c770d5fed71",
      "text": "awesome",
      "created": "Tue, 02 Jun 2020 13:22:48 GMT",
      "score": 9,
      "user": {name: "test"}
    },
    {
      "id": "84fbb9dc-713e-4121-b25c-2724076a26ad",
      "text": "bad",
      "created": "Tue, 02 Jun 2020 14:22:48 GMT",
      "score": 2,
      "user": {name: "test"}
    }
  ]






}
