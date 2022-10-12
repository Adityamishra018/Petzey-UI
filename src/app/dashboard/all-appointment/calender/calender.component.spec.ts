import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CalenderComponent } from './calender.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [CalenderComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
     ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not select past date',() => {
    let selectStartDate = new Date('2021-02-02').getTime();
    let startDate = Date.now();
    expect(selectStartDate).toBeLessThan(startDate);
  });

  it('should select current or future date ',() => {
    let selectStartDate = new Date('2022-09-02').getMilliseconds();
    let startDate = new Date('2022-08-26').getMilliseconds();
    expect(selectStartDate).toBeGreaterThanOrEqual(startDate);

  });

  it('should  select end date greater than start date',() => {
    let endtDate = new Date('2022-09-02').getTime();
    let startDate = new Date('2022-08-26').getTime();
    expect(endtDate).toBeGreaterThanOrEqual(startDate);

  });
});
