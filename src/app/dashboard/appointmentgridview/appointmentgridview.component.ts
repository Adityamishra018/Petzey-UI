import { formatDate } from '@angular/common';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultationService } from 'src/app/Services/consultation.service';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';

@Component({
  selector: 'app-appointmentgridview',
  templateUrl: './appointmentgridview.component.html',
  styleUrls: ['./appointmentgridview.component.scss'],
})
export class AppointmentgridviewComponent implements OnInit, OnChanges {
  role;
  AppointmentgridviewComponent;
  fetchedAppointments;


  constructor(
    ) {}

  ngOnInit(){



  
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  viewDetails(data){}

}
