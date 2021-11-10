import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabsChaComponent } from '../tabs-cha/tabs-cha.component';

@Component({
  selector: 'day6-tabcon',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [`

  `]
})
export class TabconComponent implements OnInit {
  @Input() title?:string;
  @ViewChild(TemplateRef , {static: true}) panelBody!: TemplateRef<unknown>;
  constructor(private tabCha: TabsChaComponent) { }
  ngOnInit():void{
    this.tabCha.addTab(this);
  }

}
