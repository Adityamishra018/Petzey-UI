import { Component, OnInit } from '@angular/core';
import {  Inject,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { VetProfileComponent } from '../vet-profile.component';
import { VetProfileService } from 'src/app/Services/VetProfile.service';
import { SideBarService } from 'src/app/Services/sidebar.service';
import { HeaderService } from 'src/app/Services/header.service';
@Component({
  selector: 'app-vet-dialog',
  templateUrl: './vet-dialog.component.html',
  styleUrls: ['./vet-dialog.component.scss']
})
export class VetdialogComponent implements OnInit {
     
  doctorform!: FormGroup;
  editable: boolean = true;
  vets$!: Observable<any>
  vet: any;
  vets: any;
  vetId = 1;
  doctors: any;
  temp: string | ArrayBuffer | null = '';
  constructor(private vetService: VetProfileService, 
    public side:SideBarService,public header:HeaderService,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<VetdialogComponent>) { }
  ngOnInit(): void {
    this.side.showsidebar();
    this.header.showheader();
    
    this.doctorform = this.fb.group({
      doctor_profile_image: new FormControl(''),
      doctor_name: new FormControl(''),
      doctor_phone_number: new FormControl(''),
      doctor_email_id: new FormControl(''),
      doctor_speciality: new FormControl(''),
      doctor_npi_no: new FormControl(''),
      doctor_practice_location: new FormControl(''),
    }); 
    this.doctorform.patchValue({
      doctor_name: this.data.VetName,
      doctor_profile_image: this.data.VetsPicture,
      doctor_phone_number: this.data.VetContactInfoDTO.PhoneNum,
      doctor_email_id: this.data.VetContactInfoDTO.EmailId,
      doctor_speciality: this.data.Speciality,
      doctor_npi_no: this.data.NPINum,
      doctor_practice_location: this.data.VetContactInfoDTO.ClinicAddress,
    })
  }
  OnClick1() {
    this.dialogRef.close();
  }
  OnClick2() {
    this.editable = !this.editable;
    // var data = new Doctor(
    //   this.doctorform.get('id').value,
    //   this.doctorform.get('doctor_profile_image').value,
    //   this.doctorform.get('doctor_name').value,
    //   this.doctorform.get('doctor_speciality').value,
    //   this.doctorform.get('doctor_npi_no').value,
    //   new Contact(
    //     this.doctorform.get('Id').value,
    //     this.doctorform.get('doctor_phone_number').value,
    //     this.doctorform.get('doctor_email_id').value,
    //     this.doctorform.get('doctor_practice_location').value,

    //   )
    //   );
      var editedData = {
        VetId: this.data.VetId,
        NPINum: this.doctorform.get('doctor_npi_no').value,
        VetName:     this.doctorform.get('doctor_name').value,
        Speciality:   this.doctorform.get('doctor_speciality').value,
        VetContactInfoDTO: {
        Id:this.data.VetId,
          PhoneNum:   this.doctorform.get('doctor_phone_number').value,
          EmailId:     this.doctorform.get('doctor_email_id').value,
          ClinicAddress: this.doctorform.get('doctor_practice_location').value,
        },
        VetsPicture: this.doctorform.get('doctor_profile_image').value,
      
      }
    this.vetService.updateVetprofile(editedData,this.vetId);
    this.dialogRef.close();
    
  }
  
}



 
 