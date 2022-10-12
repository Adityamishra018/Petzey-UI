import { VetProfileComponent } from "../vet-profile/vet-profile.component";

import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TestBed } from "@angular/core/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";
import { Vet } from "../Models/appointmentVet.model";
import { VetProfile } from "../Models/vetProfile.model";
import { ViewDetailsService } from "./viewdetails.service";
import { ViewDetailsComponent } from "./view-details.component";
import { SymptomDTO } from "../Models/SymptomDTO.model";
import { TestDTO } from "../Models/TestDTO.model";
import { AppointmentDTO } from "../Models/AppointmentDTO.model";
import { AppointmentBasicDetails } from "../Models/AppointmentBasicDetails";
import { environment } from "src/environments/environment";
import { Prescription } from "../Models/Prescription.model";
import { Medicine } from "../Models/Medicine.model";

describe("ViewDetailsService",()=>{
    let service: ViewDetailsService;
    let http : HttpClient;
    let httpTestingController:HttpTestingController;
    let mockSymptomDetails : SymptomDTO;
    let mockTestDetails:TestDTO;
    let mockAppointmentDetails : AppointmentBasicDetails;


    beforeEach(async () => {
        service = new ViewDetailsService(http);
        await TestBed.configureTestingModule({
          imports:[MatFormFieldModule,HttpClientModule,HttpClientTestingModule],
          declarations: [ ViewDetailsComponent, ],
        })
        .compileComponents();
        service = TestBed.inject(ViewDetailsService);
        httpTestingController =TestBed.inject(HttpTestingController);
        mockSymptomDetails={
            Id:1,
            Name:'over Sleepy',
            AppointmentId:1,
        }
        mockTestDetails = {
            Id:1,
            Name:'Blood Test',
            AppointmentId:1,
        }
        // mockAppointmentDetails = {
        //     appointmentID:1,
        //     appointmentDate:new Date("2022-08-20"),
        //     PetIssues:'Test Issue',
        //     Reason:"Test Reason",
        //     petId:1,
        //     vetId:1,
        //     prescription : {id:1,medicine:{}}
        //     symptom:new SymptomDTO[],
        //     vitals:Vitals,
        //     tests:Test[],
        // }
      
        
    });
    it('Should get All Symptom details',() =>{
        const id = 1;
        service.getAllSymptoms().subscribe((res)=>{
            expect(res).toEqual(mockSymptomDetails);
        });

        const req = httpTestingController.expectOne({
            method:'GET',
            url: `${environment.ConsultationMockURL}api/appointments/getAllSymptom`
        });
        req.flush(mockSymptomDetails);
    })
    it('Should get all test details',() =>{
        service.getAllTests().subscribe((res) =>{
            expect(res).toEqual(mockTestDetails);
        });
        const req = httpTestingController.expectOne({
            method:'GET',
            url : `${environment.ConsultationMockURL}api/appointments/getAllTests`
        });
        req.flush(mockTestDetails);
    })
    // it('should get all appointment details',() =>{
    //     const id = 1;
    //     service.getAllAppointmentDetails(id).subscribe((res)=>{
    //         expect(res).toEqual(mockAppointmentDetails);
    //     });
    //     const req = httpTestingController.expectOne({
    //         method:'GET',
    //         url : `${environment.ConsultationMockURL}api/appointments/getallDetails/${id}`
    //     });
    //     req.flush(mockAppointmentDetails);
    // })
})