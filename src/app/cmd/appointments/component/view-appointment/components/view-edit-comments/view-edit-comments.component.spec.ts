import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCommentsComponent } from './view-edit-comments.component';

describe('ViewEditCommentsComponent', () => {
  let component: ViewEditCommentsComponent;
  let fixture: ComponentFixture<ViewEditCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
