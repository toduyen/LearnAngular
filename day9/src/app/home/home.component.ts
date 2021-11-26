import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';


export interface nghesitype {
  title: string;
  description: string;

}

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <ul>
      <li *ngFor="let x of Nghesi | async">
        {{x.title}}
        <br/>
        {{x.description}}
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  Nghesi!:Observable<nghesitype[]>;

  constructor() { }

  ngOnInit(): void {
    this.Nghesi = of<nghesitype[]>([
      {title: 'tuan' , description:'tuan la mot loai bo sat khong chan'},
      {title: 'tuan2' , description:'tuan la mot loai bo sat khong chan2'},
      {title: 'tuan3' , description:'tuan la mot loai bo sat khong chan3'}
    ])
  }



}
