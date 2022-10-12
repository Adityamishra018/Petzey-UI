import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSymptonsHistoryComponent } from './view-symptons-history.component';

describe('ViewSymptonsHistoryComponent', () => {
  let component: ViewSymptonsHistoryComponent;
  let fixture: ComponentFixture<ViewSymptonsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSymptonsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSymptonsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
