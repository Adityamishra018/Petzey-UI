import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { patientInformation } from '../../model/patientInformation';
import { ViewAllPatients } from '../../services/viewallpatients.service';

@Component({
  selector: 'app-view-all-patient',
  templateUrl: './view-all-patient.component.html',
  styleUrls: ['./view-all-patient.component.scss'],
})
export class ViewAllPatientComponent implements OnInit {
  // url:String;
  constructor(
    // private url:String =patientInfo.imageurl,
    private router: Router,
    private viewallpatient: ViewAllPatients
  ) {}
  // ViewAllPatient: Array<any> = [];
  ngOnInit(): void {
    this.viewallpatient.getviewallpatients().subscribe((total1: any) => {
      console.log(total1);
      this.patients = total1;
    });
  }
  patients: patientInformation[];
  //   async patientCardClicked(profile:any) {
  //     this.viewallpatient.getviewallpatientsbyid(profile.patientid).subscribe((total1: any) => {
  //     console.log(total1);
  //     // this.viewallpatient.index=this.patid.patientid;
  //     this.patients = total1;
  //   });
  //   // window.localStorage.setItem('patientid',profile);
  //     let navigationExtras: NavigationExtras = {
  //       state:{ patients: profile

  //       },};
  //       await this.router.navigate(['/CMD/patients/info'], navigationExtras);
  //   }
  // }
  patientCardClicked(patientid: number) {
    // console.log('aaaa',patientid)
    let navigationExtras: NavigationExtras = {
      state: { patientId: patientid },
    };

    this.router.navigate(['/CMD/patients/info'], navigationExtras);
  }
}


