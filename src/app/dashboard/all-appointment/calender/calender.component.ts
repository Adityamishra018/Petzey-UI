import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})

export class CalenderComponent implements OnInit {

  validDateRange : Boolean
  constructor() {

  }

  endDate;
  startDate;

  ngOnInit() {}

  applyChanges(){

  }

  cancel(){}

  updateDate($event){}
 
}
