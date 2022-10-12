import { Component, OnInit } from '@angular/core';
import { LandingScreenComponent } from '../landing-screen/landing-screen.component';

@Component({
  selector: 'ngx-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(private azureProfileService: LandingScreenComponent) { }

  ngOnInit() {
    
  }
  login(){
    this.azureProfileService.login();
  }

  // For login using azure
 
}