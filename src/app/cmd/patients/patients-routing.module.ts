import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ViewAllPatientComponent } from './components/view-all-patient/view-all-patient.component';
import {FeedbackComponent} from './components/feedback/feedback.component';

const routes: Routes = [
  {path:'view',component:ViewAllPatientComponent},
  {path:'info',component:PatientInfoComponent},
  {path:'feedback',component:FeedbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
