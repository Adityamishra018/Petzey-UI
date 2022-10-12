// import { ComponentFixture, TestBed ,inject} from '@angular/core/testing';
// import { AddAppointmentsComponent } from './add-appointment.component';

// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from "@angular/common/http/testing";
// import { ConsultationService } from 'src/app/Services/consultation.service';
// import { AppointmentService } from './add-appointment.service';
// import { PetParent } from 'src/app/Models/appointmentPetParent.model';
// import { Observable } from 'rxjs';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';
// import { AgePipe } from 'src/app/CustomPipes/Age.Pipe';
// import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
// import { FilterPipe } from 'src/app/CustomPipes/filter.pipe';
// import { HttpClient } from '@angular/common/http';
 

// describe("Add Appointment Service",() =>{
//   let component: AddAppointmentsComponent;
//   let fixture: ComponentFixture<AddAppointmentsComponent>;

//   let httpTestingController :HttpTestingController;
//   let ConsultationService:AppointmentService;
//   let url = 'https://petzeypetapi20220820162140.azurewebsites.net/api/pet/parents/getAll';
//   let PetParent:PetParent;
//   let httpclient:HttpClient;

//   beforeEach(()=>{
//     TestBed.configureTestingModule({
//       imports :[HttpClientTestingModule ,FormsModule, ReactiveFormsModule , DatePipe  ,MatAutocompleteModule],
//       declarations: [ AddAppointmentsComponent,MatAutocomplete,FilterPipe ],
//       providers:[DatePipe , FilterPipe]
//     }).compileComponents();
    
//     fixture = TestBed.createComponent(AddAppointmentsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     httpTestingController = TestBed.inject(HttpTestingController);
//     PetParent = {
//       parentId: 1,
//       parentName: 'Jhon Doe'
//     };
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   beforeEach(inject([AppointmentService],
//     (service:AppointmentService) =>{
//       ConsultationService = service;
//     }));
//     // it("should return Petparents" , () =>{
//     //   let result:any;
//     //   ConsultationService.getAllParent().subscribe(t =>{
//     //     result = t;
//     //   });
//     //   const req = httpTestingController.match({
//     //     method:"GET",
//     //     url:'https://petzeypetapi20220820162140.azurewebsites.net/api/pet/parents/getAll'
//     //   });
//     //   req.flush([PetParent]);
//     //   expect(result[0]).toEqual(PetParent);
//     // })
//     it('should return url with get request',()=>{
//         const testdata:PetParent = {parentName:'jhondoe',parentId:1};
//         httpclient.get<PetParent>(url).subscribe((testdata)=>{
//           expect(PetParent).toEqual(testdata);
//         });
//         const request = httpTestingController.expectOne(url);
//         request.flush(testdata);
//         expect(request.request.method).toBe('GET');

//     });
//     it("should returns muliple requests ", () =>{
//        const testdata:PetParent[]  = [{parentName:'jhondoe' ,parentId: 1},{parentId:2,parentName:'Pokemon'}];
//        httpclient.get<PetParent>(url).subscribe();
//        httpclient.get<PetParent>(url).subscribe();
//        httpclient.get<PetParent>(url).subscribe();
//        const requests = httpTestingController.match(url);
//        expect(requests.length).toEqual(3);
//     })
// });

