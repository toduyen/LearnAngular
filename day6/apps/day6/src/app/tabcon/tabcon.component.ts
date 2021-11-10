import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild , OnDestroy } from '@angular/core';
import { TabPanelDirective } from '../tab-panel.directive';
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
export class TabconComponent implements OnInit , OnDestroy {
  @Input() title?:string;
  @ViewChild(TemplateRef , {static: true}) implicitbody!: TemplateRef<unknown>;
  @ContentChild(TabPanelDirective,{static:true , read: TemplateRef}) explictBody!: TemplateRef<unknown>;

  constructor(private tabCha: TabsChaComponent) { }

  get panelBody():TemplateRef<unknown>{
    return this.explictBody || this.implicitbody;
  }

  ngOnInit(){
    this.tabCha.addTab(this);
  }
  ngOnDestroy(){
    this.tabCha.removeTab(this);
  }
}
