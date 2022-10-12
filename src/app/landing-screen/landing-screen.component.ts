import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { Subscription } from 'rxjs';
import { b2cPolicies, isIE } from '../app-config';
import { HeaderService } from '../Services/header.service';
import { SideBarService } from '../Services/sidebar.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
   

  }

  login(){}


}
