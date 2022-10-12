import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorModel } from '../Model/doctor-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user: any = null;
  apiurl: string;
  constructor(private http: HttpClient) {
    //this.apiurl = `http://localhost:3000/`;
   // this.apiurl=`https://cmd-appointment.skillassure.com/api/`
   this.apiurl=`https://cmd-appointment.skillassure.com/api/`

  }

  getDoctor(id: any) {
    return this.http.get<DoctorModel>(this.apiurl + "doctor/" + id);
  }
}
