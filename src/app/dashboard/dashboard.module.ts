import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

//import { AppointmentConformationComponent } from '/appointment-conformation/appointment-conformation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { AllPetsVetsComponent } from './all-pets-vets/all-pets-vets.component';
import { AppointmentgridviewComponent } from './appointmentgridview/appointmentgridview.component';
import { AddAppointmentsComponent } from './add-appointment/add-appointment.component';
// import { FilterPipe } from '../CustomPipes/filter.pipe';
// import { AgePipe } from '../CustomPipes/Age.Pipe';
import { VetProfileComponent } from '../vet-profile/vet-profile.component';
import { RecepAddAppointmentComponent } from './recep-add-appointment/recep-add-appointment.component';
import { PetAddAppointmentComponent } from './pet-add-appointment/pet-add-appointment.component';
import { ReceptionistService } from '../Services/receptionist.service';
import { RecepProfileComponent } from '../recep-profile/recep-profile.component';
import { RecepDialogComponent } from '../recep-profile/recep-dialog/recep-dialog.component';
import { CalenderComponent } from './all-appointment/calender/calender.component';
import { MatButtonModule } from '@angular/material/button';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { CardComponentComponent } from './card-component/card-component.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AllPetsVetsComponent,
    AllAppointmentComponent,
    AppointmentgridviewComponent,
    // FilterPipe,
    ViewDetailsComponent,
    // AgePipe,
    AddAppointmentsComponent,
    RecepAddAppointmentComponent,
    PetAddAppointmentComponent,
    RecepProfileComponent,
    RecepDialogComponent,
    CalenderComponent,
    CardComponentComponent,
  ],
  imports: [
    MatGridListModule,
    MatStepperModule,
    MatSelectModule,
    MatMenuModule,
    MatSliderModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatAutocompleteModule,
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [DatePipe, ReceptionistService],
})
export class DashboardModule {FilterPipe}
