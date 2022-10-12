import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { AddAppointmentsComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'allAppointment', component: AllAppointmentComponent },
  { path: 'addAppointmentForDoctor', component: AddAppointmentsComponent },
  { path: '', redirectTo: 'allAppointment', pathMatch: 'full' },
  {path:'viewdetails',component:ViewDetailsComponent},
 // {path:'viewappdetails',component:ViewAppDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
