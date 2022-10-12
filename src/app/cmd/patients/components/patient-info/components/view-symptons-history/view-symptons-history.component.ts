import { Component, OnInit} from '@angular/core';
import { addeditsymptom } from 'src/app/cmd/patients/model/addeditsymptom';
import { SymptomService } from 'src/app/cmd/patients/services/symptom.service';
import { AddEditSymptonHistoryComponent } from './components/add-edit-sympton-history/add-edit-sympton-history.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-symptoms',
  templateUrl: './view-symptons-history.component.html',
  styleUrls: ['./view-symptons-history.component.scss']
})
export class ViewSymptonsHistoryComponent implements OnInit {
  

  getdetails:string = 'd-flex';
  getdetails2:string = 'd-none';
  viewdetails:string = 'd-none';
  
  constructor(private symptomservice: SymptomService,public dialog:MatDialog) { }
  symptoms!: addeditsymptom[];

  trackbysymptom(index: number, symptoms: addeditsymptom) {
    return symptoms.symptomId;
  }

  ngOnInit(): void {
    this.symptomservice.getsymptomps()
    .subscribe(symptom=>this.symptoms=symptom)
  }

  addsymptom() {
    this.symptomservice.isAdd = true;
    this.dialog.open(AddEditSymptonHistoryComponent, { disableClose: true });
    this.dialog.afterAllClosed.subscribe(()=>this.ngOnInit());
  }

  editsymptom(symptomId: number) {
    this.symptomservice.isAdd = false;
    this.symptomservice.editIndex=symptomId;
    console.log(symptomId+"This is edit method");
    this.dialog.open(AddEditSymptonHistoryComponent, { disableClose: true });
    this.dialog.afterAllClosed.subscribe(()=>this.ngOnInit());
  }

  deletesymptom(symptomId: number) {
    this.symptoms.splice(symptomId-1,1)
    this.symptomservice.deleteSymptom(symptomId)
      .subscribe((result) => {
        this.ngOnInit();
      });
  }
  showdetails() {
    this.getdetails = 'd-none';
    this.viewdetails = 'd-flex';
    this.getdetails2 = 'd-flex';
  }

  showdetails2() {
      this.getdetails = 'd-flex'
      this.viewdetails = 'd-none';
      this.getdetails2 = 'd-none';
  }


}


