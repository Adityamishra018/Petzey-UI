import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingScreenRoutingModule } from './landing-screen-routing.module';
import { LandingScreenComponent } from './landing-screen.component';
import { TopHeaderComponent } from '../topheader/topheader.component';


@NgModule({
  declarations: [
    LandingScreenComponent,
    TopHeaderComponent
  ],
  imports: [
    CommonModule,
    LandingScreenRoutingModule
  ]
})
export class LandingScreenModule { 

}
