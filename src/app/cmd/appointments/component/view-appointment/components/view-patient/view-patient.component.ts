import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientdetailsService } from 'src/app/cmd/appointments/Service/patientdetails.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {

  constructor(private _patientdetailsservice:PatientdetailsService,private _Activatedroute:ActivatedRoute) { }

  patient: any = [];
  appointmentId:any;
  imgsrcM:String="../../assets/images/male.jpg";
  imgsrcF:String="../../assets/images/female.png";


  ngOnInit(): void {
    this.appointmentId=this._Activatedroute.snapshot.paramMap.get('id');
    this._patientdetailsservice.getPatientDetails(this.appointmentId).subscribe(comm=>
      {
      console.log(comm);
      
      this.patient=comm;
  });
  }
  

}