import { Component } from '@angular/core';
import { Author, authors } from '../author.model';

@Component({
  selector: 'day2-data-list',
  template: `
    <day2-data-detail *ngFor="let a of authors" [author]="a" (Select)="onSelected($event)" (Delete)="deleItem($event)"></day2-data-detail>
    <br/>
    <p>Current data -- {{currentAuthor?.title}} and {{currentAuthor?.id}}</p>
  `,
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {
   authors:Author[]= authors;
   currentAuthor = authors[0];
   onSelected(selectedAuthor: Author){
    this.currentAuthor = selectedAuthor;
   }
   deleItem(id:number){
    this.authors = this.authors.filter(x => {
      return x.id !== id
    })
    if(this.currentAuthor.id === id){
      this.currentAuthor = this.authors[0]
    }
   }
}
