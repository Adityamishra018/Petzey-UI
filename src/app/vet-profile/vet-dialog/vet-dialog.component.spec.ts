import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { VetdialogComponent } from './vet-dialog.component';

describe('VetDialogComponent', () => {
  let component: VetdialogComponent;
  let fixture: ComponentFixture<VetdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetdialogComponent ],imports:[HttpClientModule,MatDialogModule,],
      providers:[FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
