import { Component } from '@angular/core';
// import { interval, Observable } from 'rxjs';
export interface typeUserName {
  name: string;
  age: number;
}
export interface addressType {
  address1: string;
  adddress2: string;
  city: string;
  state: number;
  zip: number;
  country: string;
}
@Component({
  selector: 'day7-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title?: string = 'day7';
  currentDate: Date = new Date();
  fullname?: string = 'phan tuan rikkeisoft';
  userInfo: typeUserName = {
    name: 'tuanphan',
    age: 23,
  };
  // interval$:Observable<number> = interval(1000);
  address: addressType = {
    address1: 'hung yen',
    adddress2: 'Me tri - Ha Noi',
    city: 'Ha Noi',
    state: 250000,
    zip: 14,
    country: 'vietnam',
  };
  botterWine = [
    {
      name: 'phantuan',
      age: 23,
    },
    {
      name: 'tran hung',
      age: 23,
    },
    {
      name: 'la quyet tam',
      age: 19,
    },
    {
      name: 'A vang',
      age: 15,
    },
    {
      name: 'Doai',
      age: 17,
    },
    {
      name: 'Duy',
      age: 19,
    },
  ];
  btnPushUser(){
     console.log('click me');
    this.botterWine = [...this.botterWine , {name: 'tuandeptrai',age:24}]
  }
}

