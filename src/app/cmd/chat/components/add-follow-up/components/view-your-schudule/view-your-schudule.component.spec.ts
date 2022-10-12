import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYourSchuduleComponent } from './view-your-schudule.component';

describe('ViewYourSchuduleComponent', () => {
  let component: ViewYourSchuduleComponent;
  let fixture: ComponentFixture<ViewYourSchuduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewYourSchuduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewYourSchuduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
