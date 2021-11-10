import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsConComponent } from './tabs-con.component';

describe('TabsConComponent', () => {
  let component: TabsConComponent;
  let fixture: ComponentFixture<TabsConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
