import { VetProfileComponent } from "../vet-profile/vet-profile.component";
import { VetProfileService } from "./VetProfile.service";
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TestBed } from "@angular/core/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import {HttpClientTestingModule,HttpTestingController} from "@angular/common/http/testing";

describe("VetProfileService",()=>{
    let service: VetProfileService;
    let http : HttpClient;
    let httpTestingController:HttpTestingController;
    let baseUrl ="api/vetprofile";
    let mockVetProfile;
    

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports:[MatFormFieldModule,HttpClientModule,HttpClientTestingModule],
          declarations: [ VetProfileComponent, ],
        })
        .compileComponents();
        service = TestBed.inject(VetProfileService);
        httpTestingController =TestBed.inject(HttpTestingController);
        mockVetProfile={
            VetId: 2,
            doctor_name: 'Rosie',
            ContactDetails: {
                doctor_phone_number:9080706010,
                ContactId:1,
                doctor_ClinicAddress:'Bangalore',
                doctor_email_id:'rosie@gmail.com'
            },
            doctor_speciality: 'Dermatologist',
            doctor_npi_no: 123456,
        }
      
        
    });
    it('Should get Vet profile details',() =>{
        const id = 1;
        // service.getVetprofile(id).subscribe((res)=>{
        //     expect(res).toEqual(mockVetProfile);
        // });

        const req = httpTestingController.expectOne({
            method:'GET',
            url:`https://petzeyvetapi20220820131121.azurewebsites.net/api/Vet/GetVetProfileDetails/1`
        });
        req.flush(mockVetProfile);
    })
})