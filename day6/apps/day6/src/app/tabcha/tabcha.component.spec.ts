import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabchaComponent } from './tabcha.component';

describe('TabchaComponent', () => {
  let component: TabchaComponent;
  let fixture: ComponentFixture<TabchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
