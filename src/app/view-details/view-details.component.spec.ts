import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SymptomDTO } from '../Models/SymptomDTO.model';
import { TestDTO } from '../Models/TestDTO.model';

import { ViewDetailsComponent } from './view-details.component';

describe('ViewDetailsComponent', () => {
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsComponent],
      imports:[HttpClientModule],
      providers:[FormBuilder,SymptomDTO,TestDTO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
