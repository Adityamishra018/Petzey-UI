import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailibiltySettingComponent } from './view-availibilty-setting.component';

describe('ViewAvailibiltySettingComponent', () => {
  let component: ViewAvailibiltySettingComponent;
  let fixture: ComponentFixture<ViewAvailibiltySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAvailibiltySettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAvailibiltySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
