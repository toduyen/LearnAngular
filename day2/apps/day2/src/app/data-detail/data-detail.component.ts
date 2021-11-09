import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'day2-data-detail',
  template: `
  <div>
    {{author?.title}} -- {{author?.id}}
    <button (click)="Select.emit(author)">SELECT</button>
    <button (click)="Delete.emit(author.id)">X</button>
  </div>
  `,
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent {
@Input() author!:Author
@Output() Select = new EventEmitter<Author>();
@Output() Delete = new EventEmitter<number>();
}
