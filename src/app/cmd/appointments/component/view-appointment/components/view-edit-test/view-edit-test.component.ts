import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { TestServiceService } from 'src/app/cmd/appointments/Service/test-service.service';
export interface test {
  testId: number,
  testName: string;
}
@Component({
  selector: 'app-view-edit-test',
  templateUrl: './view-edit-test.component.html',
  styleUrls: ['./view-edit-test.component.scss']
})

export class ViewEditTestComponent implements OnInit {
appId:any;
 selectedTest: test[] = []
  viewTest:any[]=[]
  newTest:any[]=[]
 fetchedAppointment:any
  finalTest:any[]=[]
  constructor(private TestService:TestServiceService,private _Activatedroute:ActivatedRoute){
    //get tests for dropdown
    this.TestService.getTests().subscribe(data=>{
      this.newTest.push(data)
      console.log(this.newTest[0]);
      for(var i=0;i<this.newTest[0].length;i++){
        this.finalTest.push(this.newTest[0][i]);
      }
    })
    //display previously added tests
    this.viewTests();
     
  }
  //add test function
  addItem(item: any) {
    this.selectedTest.push(item);

    for (var i = 0; i <= this.selectedTest.length - 1; i++) {
      var flag: boolean = true

      for (var j = 0; j < i; j++) {
        if (this.selectedTest[j].testId !== this.selectedTest[i].testId) {

          flag = true;
        }
        else {
          this.removeItem(this.selectedTest[i].testId);
          break;
        }

      }

    }
    this.TestService.addTestToAppointment(this.selectedTest,this.appId).subscribe(data=>{
      console.log("Success"+data);
      this.viewTests();
    });

   
  }
  //Show added tests
  viewTests(){
    this.TestService.getTestsofAppointment(this.appId).subscribe(data=>{
      this.fetchedAppointment=data
      console.log(this.fetchedAppointment)
      console.log(this.fetchedAppointment.tests)
      this.viewTest=this.fetchedAppointment.tests
    })
  }
  //remove test function
  removeItem(t: any) {
    this.TestService.deleteTestsofAppointment(this.appId,t).subscribe(data=>{
    console.log(data);
    this.viewTests();

    })
    var num = this.selectedTest.indexOf(t);
    this.selectedTest.splice(num, 1);

  }

  //code for test dropdown
  myControl = new FormControl();
  options: test[] =this.finalTest;
    
  filteredOptions: Observable<test[]> | undefined;

  ngOnInit() {  

    this.appId=this._Activatedroute.snapshot.paramMap.get('id');

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
    this.TestService.getTestsofAppointment(this.appId).subscribe(data=>{
      this.fetchedAppointment=data
      console.log(this.fetchedAppointment)
      console.log(this.fetchedAppointment.tests)
      this.viewTest=this.fetchedAppointment.tests
    })
    

   
  }

  displayFn(t: test): string {

    return t && t.testName ? t.testName : '';
  }
  //code for filtering options when keys pressed
  private _filter(name: string): test[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.testName.toLowerCase().includes(filterValue));
  }
}