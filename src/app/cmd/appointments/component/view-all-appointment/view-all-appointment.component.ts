import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentsService } from '../../Service/appointments.service';
import { FeedbackService } from '../../Service/feedback.service';

import { ViewFeedbackComponent } from '../view-feedback/view-feedback.component';

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.scss']
})
export class ViewAllAppointmentComponent implements OnInit {
  isShow: boolean = false;
  confirm: any;
  filtercancelappointments: any;
  id1:number=0;



  constructor(private router: Router,public dialog:MatDialog
    ,private _appointmentservice:AppointmentsService,private _FeedbackService:FeedbackService
    ) { }
    allappointments:{id: number,
      gender:string ,
      time: string,
      age: number,
      issue: string,
      status: string,
      name: string,
      date: string}[]=[];

      gender:String= "M";

      imgsrcM:String="../../assets/images/male.jpg";
      imgsrcF:String="../../assets/images/female.png";

// getselected(e:any){
// console.log(e.target.value);
// }
cancel(id:number) {
  this._appointmentservice.canceloracceptappointment(id,"cancelled").subscribe((data:any)=>
  console.log(data));
} 
accept(id:number){
this._appointmentservice.canceloracceptappointment(id,"accepted").subscribe((data:any)=>
console.log(data));
}

  getfb(id:number) {
    this._FeedbackService.appointmentId=id;
    this.dialog.open(ViewFeedbackComponent, { disableClose: true });
  }
  viewDetails(id:number) {
   this.router.navigate(['/CMD/appointment/ViewAppointmentDetails/'+id])
  }
  accepted: number = 0;
  total: Number = 0;
  cancelled: Number = 0;
 
  ngOnInit(): void {
    this._appointmentservice.getappointments().subscribe((total1: any) => {
      console.log(total1);
      this.total = total1;
      // return this.total;
    });
    this._appointmentservice.getaccepted().subscribe((accept: any) => {
      console.log(accept);
      this.accepted = accept;
      // return this.total;
    });
    this._appointmentservice.getcancelled().subscribe((cancel: any) => {
      console.log(cancel);
      this.cancelled = cancel;
      // return this.total;
    });
    this._appointmentservice.getviewallappointments().subscribe((appoint:any) =>
 {
   console.log(appoint);
   this.allappointments=appoint;
   // return this.total;
 });
 

 
 
  }
  selected:String="all";
  getselected(name:any){
    this.selected=name.target.value
    console.log(this.selected)
    if(this.selected==="confirmed"){
      this._appointmentservice.getfilterconfirmedappointments().subscribe((confirmed:any) =>
      {
        console.log(confirmed);
        this.allappointments=confirmed;
        // return this.total;
      });

    }
    else if(this.selected==="cancelled"){
      this._appointmentservice.getfiltercancelledappointments().subscribe((remove:any) =>
        {
          console.log(remove);
          this.allappointments=remove;
          // return this.total;
        });
        

}
else if(this.selected==="pending"){
  this._appointmentservice.pendingappointments().subscribe((remove:any) =>
    {
      console.log(remove);
      this.allappointments=remove;
      // return this.total;
    });}
else{
  this._appointmentservice.getviewallappointments().subscribe((appoint:any) =>
      {
        console.log(appoint);
        this.allappointments=appoint;
        // return this.total;
      });
}
   
  
}
}








