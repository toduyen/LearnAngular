import { Component } from '@angular/core';
let _count = 1;
@Component({
  selector: 'day6-couter',
  template: `
      <p>count: {{counter}}</p>
  `,
  styles: [`

  `]
})
export class CouterComponent  {
  counter:number = _count++;
}
