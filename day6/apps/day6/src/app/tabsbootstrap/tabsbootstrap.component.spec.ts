import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsbootstrapComponent } from './tabsbootstrap.component';

describe('TabsbootstrapComponent', () => {
  let component: TabsbootstrapComponent;
  let fixture: ComponentFixture<TabsbootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsbootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
