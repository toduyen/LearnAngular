import {Directive, TemplateRef} from '@angular/core';
@Directive({
  selector: 'ng-template[day6TabPanel]'
})
export class TabPanelDirective{
  constructor(public templateRef: TemplateRef<unknown>){}
}
