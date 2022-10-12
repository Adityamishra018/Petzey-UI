import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsymptomsComponent } from './editsymptoms.component';

describe('EditsymptomsComponent', () => {
  let component: EditsymptomsComponent;
  let fixture: ComponentFixture<EditsymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
