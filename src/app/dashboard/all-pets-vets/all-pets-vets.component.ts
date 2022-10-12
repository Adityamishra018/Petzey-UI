import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';

@Component({
  selector: 'pets-vets',
  templateUrl: './all-pets-vets.component.html',
  styleUrls: ['./all-pets-vets.component.scss']
})
export class AllPetsVetsComponent implements OnInit {
  
  constructor() { }

  role = 'vet'

  ngOnInit() {

  }

}
