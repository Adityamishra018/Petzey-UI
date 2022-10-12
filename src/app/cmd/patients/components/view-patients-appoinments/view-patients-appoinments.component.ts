import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-patients-appoinments',
  templateUrl: './view-patients-appoinments.component.html',
  styleUrls: ['./view-patients-appoinments.component.scss']
})
export class ViewPatientsAppoinmentsComponent implements OnInit {

  
  
  
constructor(private router: Router) {
  
  }
  createFeedback(){
    this.router.navigateByUrl('/user');
    };
    
    isModalOpen:boolean = false;
    isEditedForm:boolean=false;

    open(){
      console.log("opened")
      this.isModalOpen=true;
      this.isEditedForm=false;
    }
    onOpenEdit(){
      this.isEditedForm=true;
      this.isModalOpen=true;
    }
  
    onClose(){
      this.isModalOpen=false;
      this.isEditedForm=false;
    }
    ngOnInit(): void {
    }
    

  
  doctor = [
    { "name":"Dr.Amit L", "date":'12/03/2019', "time":'3.30' },
     { "name":"Dr. Shree R ", "date":'20/04/2021', "time":'12.30' },
    { "name":"Dr. Amit L ", "date":'22/2022', "time":'2.00' },
     //{ "name":"Dr. Shree R ", "date":'15/04/2017', "time":'5.30' },
     //{ "name":"Dr. Shree R ", "date":'22/05/2019', "time":'3.30' },
    // { "name":"Dr. Soanli Patil", "date":'06/10/2021', "time":'7.30' },
     //{ "name":"Dr. Soanli Patil", "date":'06/10/2021', "time":'7.30' },
     //{ "name":"Dr. Soanli Patil", "date":'06/10/2021', "time":'7.30' },
   //  { "name":"Dr. Soanli Patil", "date":'06/10/2021', "time":'7.30' },
    
    { "name":"Dr.Sonali Patil ", "date":'30/02/2021', "time":'6.30' }
    

   ];

}
