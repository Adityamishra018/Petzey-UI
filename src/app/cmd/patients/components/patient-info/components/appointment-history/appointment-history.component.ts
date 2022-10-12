import { Component, OnInit } from '@angular/core';
import { AppointmentHistoryService } from 'src/app/cmd/patients/services/appointment-history.service';
@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit {
  
  
  
  constructor(private _appointmenthistoryservice:AppointmentHistoryService) { }

  appointmenthistory:Array <any>=[]

  // oldappointment :any[]=[]

  
   ngOnInit(): void {

    this._appointmenthistoryservice.getappointments().subscribe((total1:any) =>
    {
      console.log(total1);
      this.appointmenthistory=total1;
      //  return this.total;
    });


   }

   Oldappointments = [
     { "appointment_history_id":"10","appointmentDate":'12/03/2019',"comment":"Patient encounteg an hour!","doctorname":"Dr.Amit", "specialist":"Cardiologist","year":'2015',"Time":'4.30' },
     { "appointment_history_id":"20","appointmentDate":'15/04/2019',"comment":"Patient encounteg an hour!","doctorname":"Dr.Sana", "specialist":"Cardiologist","year":'2011',"Time":'9.30' },

   
    // { "name":"Dr.Shree R ","date":'20/04/2021',"time":'12.30'},
    // { "name":"Dr. Amit L ", "date":'22/2022', "time":'2.00' },
    // { "name":"Dr. Shree R ", "date":'15/04/2017', "time":'5.30' },
    // { "name":"Dr. Shree R ", "date":'22/05/2019', "time":'3.30' },
    // { "name":"Dr. Soanli Patil", "date":'06/10/2021', "time":'7.30' },
    // { "name":"Dr.Sonali Patil ", "date":'30/02/2021', "time":'6.30' }
    

   ];

    //  for(var i=0;i<=this.appointmenthistory[0].length-1;i++)
    //  {
    //    this.oldappointment.push(this.appointmenthistory[0][i])

    //  }



     
     }
    
  