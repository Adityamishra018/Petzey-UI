import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditTestComponent } from './view-edit-test.component';

describe('ViewEditTestComponent', () => {
  let component: ViewEditTestComponent;
  let fixture: ComponentFixture<ViewEditTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
