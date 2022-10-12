import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, startWith, map } from 'rxjs';
import { RecommendationService } from 'src/app/cmd/appointments/Service/recommendation.service';

export interface drDetails {
  id: number;
  name: String;
  mobileNumber: String;
  mailId: String;
  npi: String;
  pracLocation: String;
  specialist: String;
}

//export interface MyInterface extends Array<drDetails> { }
export interface drRecommendation {
  recommendationId: number;
  doctor: drDetails;
}

@Component({
  selector: 'app-view-edit-recommendation',
  templateUrl: './view-edit-recommendation.component.html',
  styleUrls: ['./view-edit-recommendation.component.scss']
})

export class ViewEditRecommendationComponent implements OnInit {
  my: Array<drDetails> = [];
  drNames: drDetails[] = [];
  recArray:drRecommendation[]=[];
  
  showArray:drRecommendation[]=[];
  appId:Number=1;
  appointmnetDetails:any;

  finalList: drRecommendation | drRecommendation = {
    recommendationId:0,
    doctor: {
      id: 0,
      name: "",
      mobileNumber: "",
      mailId: "",
      npi: "",
      pracLocation: "",
      specialist: "",
    }
  };
  
  constructor(private rec: RecommendationService) {
    this.rec.showNames().subscribe(data => {
      
      this.my = data;
      for (var i = 0; i < this.my.length; i++) {
        this.drNames.push(this.my[i]);
      }
      
    });
    this.showArray=[];
    this.showRecommendation();
  }
  getAllAppointment:any;
  tempArray: drRecommendation[] = [];
  myControl = new FormControl();
  options: drDetails[] = this.drNames;
  filteredOptions: Observable<drDetails[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.drName)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: drDetails): String {
    return user && user.name ? user.name : '';
  }

  private _filter(name: String): drDetails[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  remove(drObj: drRecommendation) {
   this.rec.deleteAppointment(this.appId,drObj.recommendationId).subscribe(data =>
      {
        this.showRecommendation();
      });
  }


  addDoctor(value: drDetails) {

    this.finalList.doctor = value;
    
      this.rec.addDrNames(this.finalList).subscribe(data => {
        
       this.recArray.push(data);
       
       this.rec.updateAppointment(this.appId,this.recArray).subscribe(data=>{
        
        this.showRecommendation(); 
       });
      });    
  }

  showRecommendation(){
     this.rec.getRecommendationForAppointmnet(this.appId).subscribe(data=>{
      this.getAllAppointment=data;
      this.tempArray=this.getAllAppointment.recommendations; });
     
  }
  
}


