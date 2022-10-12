import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctordetailsService } from 'src/app/cmd/appointments/Service/doctordetails.service';
@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss'],
})
export class ViewDoctorComponent implements OnInit {
  constructor(private _doctordetailsservice: DoctordetailsService,private _Activatedroute:ActivatedRoute) {}

  doctor: any = [];
  appointmentId:any;
  

  imgsrcM:String="../../assets/images/male.jpg";
  imgsrcF:String="../../assets/images/female.png";

  ngOnInit(): void {
    this.appointmentId=this._Activatedroute.snapshot.paramMap.get('id');
    this._doctordetailsservice.getDoctorDetails(this.appointmentId).subscribe((comm) => {
      console.log(comm);

      this.doctor = comm;
    });

   
  }

  
}




