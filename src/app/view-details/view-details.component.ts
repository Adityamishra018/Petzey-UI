import { isDataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AppointmentBasicDetails } from '../Models/AppointmentBasicDetails';
// import { Prescription } from '../Models/Prescription.model';
// import { Symptom } from '../Models/Symptom.Model';
// import { SymptomDTO } from '../Models/SymptomDTO.model';
// import { Test } from '../Models/Test.model';
// import { TestDTO } from '../Models/TestDTO.model';
import { ViewDetailsService } from './viewdetails.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})

@Injectable({
  providedIn: 'root'
})


export class ViewDetailsComponent implements OnInit {
  SelectedVal: string;
  DisplayDropDown: string = "d-none";
  DisplayTestDropDown: string = "d-none";
  ids: any;
  appointmentDetails: any;
  appointment;
  petDetails: any;
  vetDetails: any;
  Symptoms;
  SymptomName: any = new Set();
  Tests;
  TestName: any = new Set();
  PrescriptionDetails;
  SymptomForm: FormGroup;
  TestForm: FormGroup;
  appointmentDetailsForm: FormGroup;
  PrescriptionDetailsForm: FormGroup;
  displaySymptom: string = "d-none";
  displayTest: string = "d-none";
  statusvalue:string;



  constructor(private fb: FormBuilder, private router: Router, private service: ViewDetailsService) {
    this.ids = this.router.getCurrentNavigation().extras.state['ids']
    console.log(this.ids);
  }


  ngOnInit(): void {

    this.appointmentDetailsForm = this.fb.group({
      Prescription: new FormControl(),
      Medicine: new FormControl(),
      issue: new FormControl(),
      reason: new FormControl(),
      pet: new FormControl(),
      Test: new FormControl(),
      Symptom: new FormControl(),
      parent: new FormControl(null, Validators.required),
      vet: new FormControl(),
    });
    this.SymptomForm = this.fb.group({
      Symptom: new FormControl(),
    })

    console.log(this.Symptoms)

    this.service.getAllAppointmentDetails(this.ids.appointmentId).subscribe(res => {
      this.appointmentDetails = res
      console.log(this.appointmentDetails);
    })
    this.service.getPetDetails(this.ids.petId).subscribe(res => {
      this.petDetails = res;
      console.log(res);
    })
    this.service.getVetDetails(this.ids.vetId).subscribe(res => {
      this.vetDetails = res;
      console.log(this.vetDetails);
    })
    this.service.getAllSymptoms().subscribe({
      next: (res: any) => {
        this.Symptoms = res;
        console.log(this.Symptoms);
      },
      error: (err) => console.log(err),
    })
    this.service.getAllTests().subscribe({
      next: (res: any) => {
        this.Tests = res;
      },
      error: (err) => console.log(err)
    });



  }

  Navigate() {
    this.router.navigate(['dashboard', 'allAppointment']);
  }
  DisplaySymptom(symptom) {
    this.SymptomName.add(symptom);
  }
  DisplayTest(test) {
    this.TestName.add(test);
  }

  submit() {
    this.displaySymptom = "d-flex";
    this.DisplayDropDown = "d-none";
  }
  submitTest() {
    this.displayTest = "d-flex";
    this.DisplayTestDropDown = "d-none"

  }

  SubmitTest() {
    for (const Test of this.TestName) {
      //this.testDTO.AppointmentId = this.ids.appointmentId;
      //this.testDTO.Name = Test;
      this.service.AddTestByAppointmentId({}).subscribe({
        next: (res: any) => {
        },
        error: (err) => console.log(err)
      })
    }
  }


  SubmitSymptom() {
    for (const symptom of this.SymptomName) {
      //this.symptomDTO.AppointmentId = this.ids.appointmentId;
      //this.symptomDTO.Name = symptom;
      //console.log(this.symptomDTO);
      this.service.AddSymptomByAppointmentId(this).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => console.log(err)
      })
    }
  }

  CloseApp(){
    this.statusvalue = 'closed';
    var status = {
      AppointmentId: this.ids.appointmentId,
      Status: this.statusvalue
    }
    // console.log(this.status);
    this.service.ChangeAppointmentStatus(status).subscribe({
      next:(res:any)=>{
       
        this.Navigate();
      },
      error:(err)=>console.log(err)
    })
  }

  ConfirmAppointment(){
    this.statusvalue = 'confirmed';
    var status = {
      AppointmentId: this.ids.appointmentId,
      Status: this.statusvalue
    }
    this.service.ChangeAppointmentStatus(status).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Navigate();
      },
      error:(err)=>console.log(err)
    })
  }

  CancelApp(){    
    this.statusvalue = 'cancelled';
    var status = {
      AppointmentId: this.ids.appointmentId,
      Status: this.statusvalue
    }
    
    // console.log(this.status);
    this.service.ChangeAppointmentStatus(status).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Navigate();

      },
      error:(err) => console.log(err)
    })
  }

  OnClick() {
    this.DisplayDropDown = "d-flex";
    // this.displaySymptom = "d-none";
  }
  OnClickTest() {
    this.DisplayTestDropDown = "d-flex";
    this.displayTest = "d-none";
  }
  getAllTests() {
    this.service.getAllTests().subscribe({
      next: (res) => {
        // this.Tests = res;
        // console.log(this.Tests);
      },
      error: (err) => console.log(err),
    });
  }



  getAllSymptoms() {
    this.service.getAllSymptoms().subscribe({
      next: (res) => {
        // this.Symptoms = res;
        // console.log(this.Symptoms);
      },
      error: (err) => console.log(err),
    });
  }

  displayFnSymptom(symptom) {
    return symptom && symptom.Name ? symptom.Name : '';
  }

  submitSymptomForm() {
    console.log(this.SymptomForm.value);
    this.service.AddSymptomByAppointmentId(this.SymptomForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
  submitTestForm() {
    console.log(this.TestForm.value);
    this.service.AddTestByAppointmentId(this.TestForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => console.log(err),
    })
  }



  displayFnTest(test) {
    return test && test.Name ? test.Name : '';
  }



}




