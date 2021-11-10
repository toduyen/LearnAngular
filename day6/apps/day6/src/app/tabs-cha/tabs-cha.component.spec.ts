import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsChaComponent } from './tabs-cha.component';

describe('TabsChaComponent', () => {
  let component: TabsChaComponent;
  let fixture: ComponentFixture<TabsChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsChaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
