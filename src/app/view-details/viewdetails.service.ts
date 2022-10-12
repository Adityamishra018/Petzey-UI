import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class ViewDetailsService {
    vetId:number = 1;
    constructor(private http: HttpClient) {}

    getVetprofile(id) {
        var veturl = environment.vetURL;
        return this.http.get(`${veturl}api/doctors/doctorprofile/${id}`).pipe(
          map((d) => {
            var doctor = d;
            console.log(doctor);
            return doctor;
          })
        );
      }

      getVetDetails(vetId){
        var veturl = environment.vetURL;
        return this.http.get(`${veturl}api/Vet/GetVetProfileDetails/${vetId}`)
      }

      getPetDetails(petParentId){
        var peturl = environment.petURL;
        return this.http.get(`${peturl}api/pet/getPetsandPetParent/${petParentId}`)
      }

    getAllAppointmentDetails(id){
        var ConsultationURl = environment.ConsultationMockURL;
        return this.http.get(`${ConsultationURl}api/appointments/getallDetails/${id}`)
    }
    getAllSymptoms(){
      return this.http.get( `${environment.ConsultationMockURL}api/appointments/getAllSymptom`)
    }
    getAllTests(){
      return this.http.get(`${environment.ConsultationMockURL}api/appointments/getAllTests`)
    }

    AddSymptomByAppointmentId(symptom){
      return this.http.put(`${environment.ConsultationMockURL}api/appointments/AddSymptom`,symptom)
    }
    AddTestByAppointmentId(Test){
      return this.http.post(`${environment.ConsultationMockURL}api/appointments/AddTest`,Test)
    }
    
    GetVitals(){
      return this.http.get(`${environment.ConsultationMockURL}api`)
    }
    
    ChangeAppointmentStatus(Status){
      return this.http.patch(`${environment.ConsultationMockURL}api/appointments/changestatus`,Status)
    }
}