import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabconComponent } from './tabcon.component';

describe('TabconComponent', () => {
  let component: TabconComponent;
  let fixture: ComponentFixture<TabconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
