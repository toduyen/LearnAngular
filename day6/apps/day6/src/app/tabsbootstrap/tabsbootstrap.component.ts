import { Component } from '@angular/core';
import { TabsChaComponent } from '../tabs-cha/tabs-cha.component';

@Component({
  selector: 'day6-tabsbootstrap',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" >
        <a class="nav-link active" href="#" *ngFor="let tab of tabscon; let idx = index" (click)="selectActive(idx)">{{tab.title}}
        <button (click)="removeTab(tab)">X</button>
        </a>
      </li>
    </ul>
    <div class="tab-body" *ngIf="tabscon.length;else notempldate">
      <ng-container *ngTemplateOutlet="tabscon[activeIndex].panelBody"></ng-container>
    </div>
    <ng-template #notempldate>
      No more tabs
    </ng-template>
  `,
  providers:[
    {
      provide: TabsChaComponent,
      useExisting: TabsbootstrapComponent
    }
  ]
})
export class TabsbootstrapComponent extends TabsChaComponent {}
