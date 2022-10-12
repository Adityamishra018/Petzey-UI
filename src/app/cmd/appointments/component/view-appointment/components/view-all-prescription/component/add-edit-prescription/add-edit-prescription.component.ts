import { Component, Injectable, OnInit,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPrescriptionService } from 'src/app/cmd/appointments/Service/add-prescription.service';

@Injectable()
@Component({
  selector: 'app-add-edit-prescription',
  templateUrl: './add-edit-prescription.component.html',
  styleUrls: ['./add-edit-prescription.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditPrescriptionComponent implements OnInit {

  medicineList = ["Autrin", "crosine","Calcimax","Paracetamol","Dolo","Calpol","Limcee","Mumfer Max"];
  isAdd: boolean = this._AddPrescriptionService.isAdd;
  //appointmentId: number = this._appointmentservice.appointmentId;

  constructor(private _AddPrescriptionService: AddPrescriptionService, public dialog: MatDialog) {}

  addMedicine = new FormGroup({

    medicineName: new FormControl(null,Validators.required),
    duration: new FormControl(null,Validators.required),
    medicineCycle: new FormControl(null,Validators.required),
    take_With_Food: new FormControl(),
    description: new FormControl()
  });

  ngOnInit(): void {
    if (!this.isAdd) {
      this._AddPrescriptionService.getOneprescriptionDetails()
        .subscribe((result) => {

          this.addMedicine = new FormGroup({
            medicineName: new FormControl(result['medicineName'],Validators.required),
            duration: new FormControl(result['duration'],Validators.required),
            medicineCycle: new FormControl(result['medicineCycle'],Validators.required),
            take_With_Food: new FormControl(result['take_With_Food']),
            description: new FormControl(result['description'])
          });
        });
    }
  }

  onSubmit() {

    if (this.isAdd) {

      this._AddPrescriptionService.addAppointment(this.addMedicine.value)
        .subscribe(medicine => this.addMedicine = medicine);
    }
    else {
      this._AddPrescriptionService.editPrescriptionDetails(this.addMedicine.value)
        .subscribe(medicine => this.addMedicine = medicine);

    }
    this.dialog.closeAll();
  }
}
