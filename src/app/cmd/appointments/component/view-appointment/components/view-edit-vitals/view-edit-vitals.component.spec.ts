import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditVitalsComponent } from './view-edit-vitals.component';

describe('ViewEditVitalsComponent', () => {
  let component: ViewEditVitalsComponent;
  let fixture: ComponentFixture<ViewEditVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
