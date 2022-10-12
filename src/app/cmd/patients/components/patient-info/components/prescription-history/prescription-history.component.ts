import { Component, OnInit } from '@angular/core';
import { PrescriptionHistoryService } from 'src/app/cmd/patients/services/prescription-history.service';
@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.scss']
})
export class PrescriptionHistoryComponent implements OnInit {

  constructor(private _PrescriptionHistory:PrescriptionHistoryService) { }
//   moredetails:boolean=false;
//   onclick()
//   {
// this.moredetails = !this.moredetails;
//   }


PrescriptionHistory:Array <any>=[]


  ngOnInit(): void {
    this._PrescriptionHistory.getappointments().subscribe((total1:any) =>

    {

      console.log(total1);

      this.PrescriptionHistory=total1;

      //  return this.total;

    });
  }

}
