import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSymptonHistoryComponent } from './add-edit-sympton-history.component';

describe('AddEditSymptonHistoryComponent', () => {
  let component: AddEditSymptonHistoryComponent;
  let fixture: ComponentFixture<AddEditSymptonHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSymptonHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSymptonHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
