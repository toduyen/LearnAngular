import { Component } from '@angular/core';

@Component({
  selector: 'day4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day4';
  trangthai = {
    btntoggle1: false,
    btntoggle2: true
  }
}
