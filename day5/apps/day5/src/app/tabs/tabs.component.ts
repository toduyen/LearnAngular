import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'day5-tabs',
  template: `
    <nav class="nav mt-5">
      <a class="nav-link" href="#" *ngFor="let x of nav">
        <ng-container *ngIf="linkTemplate;else noTempLate">
          <ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{link: x}"]></ng-container>
        </ng-container>
        <ng-template #noTempLate>
          {{ x }}
        </ng-template>
      </a>
    </nav>
  `,
  styles: [``],
})
export class TabsComponent {
  @Input() nav!: string[];
  @Input() linkTemplate!: TemplateRef<any>;
}
