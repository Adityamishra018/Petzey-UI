import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TestBed } from "@angular/core/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { ConsultationService } from "./consultation.service";
import { AppointmentgridviewComponent } from '../dashboard/appointmentgridview/appointmentgridview.component';
import { timeInterval, TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Time } from "@angular/common";
import { TimeoutError } from 'rxjs';
import { environment } from 'src/environments/environment';

describe("ConsultationService",()=>{
    let service: ConsultationService;
    let http : HttpClient;
    let httpTestingController:HttpTestingController;
    let mockAppointmentDetails;
  
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports:[MatFormFieldModule,HttpClientModule,HttpClientTestingModule ],
          declarations: [ AppointmentgridviewComponent, ],
        })
        .compileComponents();
        service = TestBed.inject(ConsultationService);
        httpTestingController =TestBed.inject(HttpTestingController);
        mockAppointmentDetails = {
            appointmentID:6,
            petName:"Growlithe",
            gender:"FEMALE",
            ownerName:"Pokemon",
            appointmentDate: new Date(),
            appointmentTime: Date.now() as unknown as Time,
            petDOB:new Date("2021-08-10"),
            vetName:"Rosie",
            petId:1,
            vetId:1,
            vetSpeciality:"Dermatologist",
        }
      
    });
    it('Should get All Appointment details by vet Id and Date filter',() =>{
        const id = 1;
        const role = "vet";
        const Fromdate = new Date("2022-08-12");
        const Todate = new Date("2022-08-26");
        // service.getAllAppointmentsByRole(id,role,Fromdate,Todate).subscribe((res)=>{
        //     expect(res).toEqual(mockAppointmentDetails);
        });

        const req = httpTestingController.expectOne({
            method:'GET',
            url:`${environment.ConsultationMockURL}api/appointments/getappointments/`
        });
        req.flush(mockAppointmentDetails);
    })

   
})