import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';
import { CardService } from './card.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  vets: any;
    
  pets:any;

  petdetails;

  role = 'vet';

  constructor() { }

  ngOnInit(){
   

  }


}
