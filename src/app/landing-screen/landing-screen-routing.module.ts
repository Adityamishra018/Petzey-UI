import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen.component';

const routes: Routes = [
  { path: 'landing', component: LandingScreenComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingScreenRoutingModule { }
