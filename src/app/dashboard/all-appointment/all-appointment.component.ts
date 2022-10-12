import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';
import { CalenderComponent } from './calender/calender.component';

@Component({
  selector: 'all-appointments',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.scss'],
})
export class AllAppointmentComponent implements OnInit {


  constructor() {}

  ngOnInit(){
  }

  newAppointment(){}

  SelectChange($event){}

  showGrid;

  openCalenderDialog(){}
}
