import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ViewAllPatientComponent } from './components/view-all-patient/view-all-patient.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ViewSymptonsHistoryComponent } from './components/patient-info/components/view-symptons-history/view-symptons-history.component';
import { AddEditSymptonHistoryComponent } from './components/patient-info/components/view-symptons-history/components/add-edit-sympton-history/add-edit-sympton-history.component';
import { AppointmentHistoryComponent } from './components/patient-info/components/appointment-history/appointment-history.component';
import { PrescriptionHistoryComponent } from './components/patient-info/components/prescription-history/prescription-history.component';
import { AddPrescriptionComponent } from './components/patient-info/components/prescription-history/components/add-prescription/add-prescription.component';
import { ViewPrescriptionDetailsComponent } from './components/patient-info/components/prescription-history/components/view-prescription-details/view-prescription-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ViewPatientsAppoinmentsComponent } from './components/view-patients-appoinments/view-patients-appoinments.component';


// import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
// import { TopHeaderComponent } from 'src/app/shared/components/top-header/top-header.component';




@NgModule({
  declarations: [
    ViewAllPatientComponent,
    PatientInfoComponent,
    ViewSymptonsHistoryComponent,
    AddEditSymptonHistoryComponent,
    AppointmentHistoryComponent,
    PrescriptionHistoryComponent,
    AddPrescriptionComponent,
    ViewPrescriptionDetailsComponent,
    // ViewPatientsAppoinmentsComponent,
    //  SidebarComponent,
    //  TopHeaderComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PatientsModule { }
