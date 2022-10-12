import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as testing from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VetProfileService } from 'src/app/Services/VetProfile.service';
import { VetProfileComponent } from './vet-profile.component';

describe('VetProfileComponent', () => {
  let component: VetProfileComponent;
  let fixture: testing.ComponentFixture<VetProfileComponent>;
  let service: VetProfileService;

  beforeEach(async () => {
    await testing.TestBed.configureTestingModule({
      declarations: [ VetProfileComponent ],
      imports :[HttpClientModule , ReactiveFormsModule,MatDialogModule]
    })
    .compileComponents();
    testing.TestBed.configureTestingModule({});
    service = testing.TestBed.inject(VetProfileService);
    fixture = testing.TestBed.createComponent(VetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {

    expect(service).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
