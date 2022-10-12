
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VetProfileService } from '../Services/VetProfile.service';
import { VetdialogComponent } from './vet-dialog/vet-dialog.component';
import { HeaderService } from '../Services/header.service';
import { SideBarService } from '../Services/sidebar.service';
@Component({
  selector: 'app-vet-profile',
  templateUrl: './vet-profile.component.html',
  styleUrls: ['./vet-profile.component.scss']
})
export class VetProfileComponent implements OnInit {
  doctorform: FormGroup;
  editable: boolean;
  vet: any;
  temp: string | ArrayBuffer | null = '';
  VetId: number = 1;
  constructor(
    public formBuilder: FormBuilder,
    private service: VetProfileService,
    public dialog:MatDialog,  
    public side:SideBarService,
    public header:HeaderService

  ) { }

  ngOnInit(): void {

    this.side.showsidebar();
    this.header.showheader();

    this.doctorform = this.formBuilder.group({
      doctor_name: new FormControl(''),
      doctor_phone_number: new FormControl(''),
      doctor_email_id: new FormControl(''),
      doctor_npi_no: new FormControl(''),
      doctor_practice_location: new FormControl(''),
    });
    this.getVetProfile(this.VetId);
   
  }

  getVetProfile(id){
    // this.service.getVetprofile(id).subscribe({
    //   next: (res) => {
    //     this.vet = res;
    //     console.log(res);

    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     this.doctorform.patchValue({
    //       doctor_name: this.vet.vet_name,
    //       doctor_phone_number: this.vet.ContactDetails.doctor_phone_number,
    //       doctor_email_id: this.vet.ContactDetails.doctor_email_id,
    //       doctor_speciality: this.vet.vetSpeciality,
    //       doctor_npi_no: this.vet.doctor_npi_no,
    //       doctor_practice_location: this.vet.ContactDetails.doctor_ClinicAddress
    //     });
    //   }
    // });
  }

  OnClick1(){
    this.editable = !this.editable;
  }
  OnClick2(){
    this.editable = !this.editable;
   
  }
  openDialog():void{
    var dialogConfig =new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.data = this.vet;
    // const dialogRef=this.dialog.open(DocProfileDialogComponent, dialogConfig);
    const dialogRef=this.dialog.open( 
      VetdialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.service.getVetprofile(this.VetId);
    });
    
  }

}

