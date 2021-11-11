import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
export interface typeUserName {
  name: string;
  age: number;
}
@Component({
  selector: 'day7-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title?:string = 'day7';
  currentDate:Date = new Date();
  fullname?:string = "phan tuan rikkeisoft";
  userInfo:typeUserName = {
    name: 'tuanphan',
    age: 23
  }
  interval$:Observable<number> = interval(1000);
}
