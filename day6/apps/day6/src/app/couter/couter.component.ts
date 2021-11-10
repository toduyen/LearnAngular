import { Component } from '@angular/core';
const a = 1;
@Component({
  selector: 'day6-couter',
  template: `
      <p>count: {{counter}}</p>
  `,
  styles: [`

  `]
})
export class CouterComponent  {
  counter:number = a + 1;
}
