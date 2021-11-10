import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList  } from '@angular/core';
import { TabconComponent } from '../tabcon/tabcon.component';

@Component({
  selector: 'day6-tabs-cha',
  template: `
    <div class="tab-header">
      <div class="tab-header-item" *ngFor="let tab of tabscon;let idx = index" (click)="selectActive(idx)">
        {{tab.title}}
        <button (click)="removeTab(tab)">X</button>
      </div>
    </div>

    <div class="tab-body" *ngIf="tabscon.length;else notempldate">
      <ng-container *ngTemplateOutlet="tabscon[activeIndex].panelBody"></ng-container>
    </div>
    <ng-template #notempldate>
      No more tabs
    </ng-template>
  `,
  styles: [`

  `]
})
// you implement AfterContentInit vô thì mới có thể dùng ngAfterContentInit
export class TabsChaComponent implements AfterContentInit {
  tabscon: TabconComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();
  @ContentChildren(TabconComponent) tabConsLs!: QueryList<TabconComponent>;
  ngAfterContentInit(){
    this.tabConsLs.changes.subscribe(console.log);
    console.log(this.tabConsLs)
  }
  selectActive(idx: number){
    this.activeIndex = idx;
    this.activeIndexChange.emit(idx);
  }
  addTab (tab: TabconComponent){
    this.tabscon = [...this.tabscon , tab];
  }
  removeTab(tab: TabconComponent){
    let found = -1;
    this.tabscon = this.tabscon.filter((tp , index):boolean => {
      if(tp === tab){
        found = index;
        return false;
      }
      return true;
    });
    if(found === this.activeIndex){
      this.activeIndexChange.emit(found === this.tabscon.length ? found - 1 : found);
    }
  }
}
