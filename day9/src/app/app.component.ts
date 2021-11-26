import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Here are some links to help you start: </h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'day9';
}
