import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { SharedRoutingModule } from './shared-routing.module';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TopHeaderComponent,
    SidebarComponent,
    //LandingScreenComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedRoutingModule,
    MatDialogModule,
    
  ],
  exports:[
    SidebarComponent,
    TopHeaderComponent
  ]
})
export class SharedModule { }
