import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'day4-toggle',
  template: `
    <div class="content-Header">
      <ng-content select=".heading1 , .heading2"></ng-content>
    </div>
    <div
      class="toggle-wrapper"
      [class.checked]="checked"
      tabindex="0"
      (click)="toggle()"
    >
      <div class="toggle"></div>
    </div>
    <div class="content-description">
      <ng-content select=".desction2 , .desction1"></ng-content>
      <ng-content select="btn-skip"></ng-content>
    </div>
  `,
  styles: [
    `
      .toggle-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fe4551;
        box-shadow: 0 20px 20px 0 rgba(#fe4551, 0.3);
      }

      .toggle-wrapper:active {
        width: 95px;
        height: 95px;
        box-shadow: 0 15px 15px 0 rgba(#fe4551, 0.5);
      }
      .toggle-wrapper .toggle {
        height: 17px;
        width: 17px;
      }

      .toggle {
        transition: all 0.2s ease-in-out;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: 10px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        animation: red 0.7s linear forwards;
      }

      .toggle-wrapper.checked {
        background-color: #48e98a;
        box-shadow: 0 20px 20px 0 rgba(#48e98a, 0.3);
      }

      .toggle-wrapper.checked:active {
        box-shadow: 0 15px 15px 0 rgba(#48e98a, 0.5);
      }

      .toggle-wrapper.checked .toggle {
        width: 0;
        background-color: #fff;
        border-color: transparent;
        border-radius: 30px;
        animation: green 0.7s linear forwards !important;
      }
    `,
  ],
})
export class ToggleComponent {
  @Input() checked?: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggle(): void {
    this.checkedChange.emit(!this.checked);
  }
}