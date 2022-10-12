import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditAccountSettingComponent } from './view-edit-account-setting.component';

describe('ViewEditAccountSettingComponent', () => {
  let component: ViewEditAccountSettingComponent;
  let fixture: ComponentFixture<ViewEditAccountSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditAccountSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
