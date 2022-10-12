import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { patientInformation } from '../../model/patientInformation';
import { ViewAllPatients } from '../../services/viewallpatients.service';
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
})
export class PatientInfoComponent implements OnInit {
  patid: any;
  patientInfo: patientInformation;
  constructor(
    private viewallpatient: ViewAllPatients,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.patid = this.router.getCurrentNavigation().extras.state['patientId'];
    console.log('dvcxxcv',this.patid,this.router.getCurrentNavigation());

    //this.patid=(window.localStorage.getItem('patientid'));
  }

  // ViewAllPatient: Array<any> = [];

  ngOnInit(): void {
    // this.patid=(window.localStorage.getItem('patientid'));

    this.viewallpatient.getviewallpatientsbyid(this.patid)
      .subscribe((total: any) => {
        console.log(total);

        this.patientInfo = total;
      });

    // this.viewallpatient.getviewallpatients().subscribe((total1: any) => {
    //   console.log(total1);
    //   this.patientInfo = total1;
    // });
  }
}
// export class PatientInfoComponent implements OnInit {
//   patid: any;

//   constructor(
//     //private viewallpatient: ViewAllPatients,
//     private router:Router
//     ) {
//     // this.patients=this.router.getCurrentNavigation().extras.state["profile"];
//    this.patid=(window.localStorage.getItem('patientid'));

//   }
//   // ViewAllPatient: Array<any> = [];
//    patients: any[]=[]
//   ngOnInit(): void {

//     // this.patid=(window.localStorage.getItem('patientid'));

//     // this.viewallpatient.getviewallpatients().subscribe((total1: any) => {
//     //   console.log(total1);
//     //   this.patients = total1;
//     // });
//   }
// }
