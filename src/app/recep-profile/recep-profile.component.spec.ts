import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepProfileComponent } from './recep-profile.component';

describe('RecepProfileComponent', () => {
  let component: RecepProfileComponent;
  let fixture: ComponentFixture<RecepProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
