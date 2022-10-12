// import { HttpClient } from "@angular/common/http"
// import { AppointmentService } from "./add-appointment.service";
// import { of } from 'rxjs';
// describe('Post Appointment',()=>{
//     let httpClientSpy:jasmine.SpyObj<HttpClient>;
//     let appointmentService:AppointmentService;
//     let Appointments = [
//         {
//             AppointmentDate: '2022-08-21',
//             AppointmentTime: '10:00',
//             Reason: 'Test Reason',
//             Issue: "Test Issue",
//             VetId:1,
//             VetName: 'Rosie',
//             petId: 1,
//             petName: 'Raju'
//         }
//     ];
//     let petParents = [
//         {
//             parentId :1,
//             parentName:'Jhon Doe'
//         }
//     ]

//     beforeEach(() => {
//         httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
//         appointmentService = new AppointmentService(httpClientSpy);
//     });

//     describe('getAllParent()',() => {
//         it('should return expected list of Petparents when getAllParent is called' , (done:DoneFn) =>{
//             httpClientSpy.get.and.returnValue(of(petParents));
//             appointmentService.getAllParent().subscribe({
//                 next:(petparents) =>{
//                     expect(petparents).toEqual(petParents);
//                     done();
//                 },
//                 error: () =>{
//                     done.fail;
//                 },
//             });
//             expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//         });
//     });
// });