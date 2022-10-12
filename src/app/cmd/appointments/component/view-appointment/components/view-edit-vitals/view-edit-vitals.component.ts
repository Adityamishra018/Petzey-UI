import { Component, OnInit } from '@angular/core';
import { VitalsService } from 'src/app/cmd/appointments/Service/vitals.service';
import { Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-edit-vitals',
  templateUrl: './view-edit-vitals.component.html',
  styleUrls: ['./view-edit-vitals.component.scss']
})
export class ViewEditVitalsComponent implements OnInit {
  //[x: string]: any;

  ImgSrc1:string ="assets/images/heart.png";
  ImgSrc2:string ="assets/images/temprature.png";
  ImgSrc3:string="assets/images/didbetis.jpg";
  ImgSrc4:string="assets/images/respi1.jpg";
  
  vital: any = [];
  aid!: any;
  constructor(private vitalsservice: VitalsService,private _Activatedroute:ActivatedRoute) { }

  //input1=79;
  //input2=37;
  //input3=300;
  //input4=14;

  ReadMore:boolean=false;
//isReadonly:boolean=false;
 
  
 editclick()
 {
this.ReadMore=true;
//this.isReadonly=false;
 }


 
 saveclick()
 {

this.ReadMore=false;
//this.isReadonly=true;
//this.vitalsservice.savevitals(this.vital);

this.vitalsservice.editvitals(this.vital).subscribe(data => {
  this.vital = data;
 console.log(data);
})

 }

ngOnInit(): void {
  this.aid=this._Activatedroute.snapshot.paramMap.get('id');
this.vitalsservice.appointid = this.aid;
   this.getVitalsbyAppointid();
  //this.getVitals();

    
  }

  getVitalsbyAppointid()
  {

    this.vitalsservice.getvitalsbyAppointmentid().subscribe(data  => {
      this.vital=data;
      console.log(data);
    });


  }



}
