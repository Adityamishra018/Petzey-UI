import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllChatDetailsComponent } from './view-all-chat-details.component';

describe('ViewAllChatDetailsComponent', () => {
  let component: ViewAllChatDetailsComponent;
  let fixture: ComponentFixture<ViewAllChatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllChatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllChatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
