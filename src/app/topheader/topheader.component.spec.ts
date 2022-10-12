import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BroadcastService, MsalService, MSAL_CONFIG } from '@azure/msal-angular';
import { msalConfig } from '../app-config';
import { LandingScreenComponent } from '../landing-screen/landing-screen.component';

import { TopHeaderComponent } from './topheader.component';

describe('TopheaderComponent', () => {
  let component: TopHeaderComponent;
  let fixture: ComponentFixture<TopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeaderComponent ],
      imports:[HttpClientModule,MatDialogModule],
      providers:[LandingScreenComponent,BroadcastService,MsalService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
