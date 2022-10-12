import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  activePageName:any;

  constructor() { }

  ngOnInit(): void {
    this.activePageName = localStorage.getItem("activePageName")
  }

  setActivePage(pageName: string){
    localStorage.setItem("activePageName",pageName)
  }

}
