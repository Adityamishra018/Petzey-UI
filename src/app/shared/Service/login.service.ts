import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
 Url = 'http://localhost:8093/authenticate';
  //Url = 'http://localhost:8080/api/getAllDoctorInfo';
  addinformationurl="http://localhost:8093/api/addDoctorInfo"
 // updatbyidurl="http://localhost:8093/api/updateDoctorInfo/{id}";
 updatbyidurl="http://localhost:8093/api/updateDoctorInfo";
 // getdatabyidurl="http://localhost:8093/api/getDoctorInfoById/{id}";
 getdatabyidurl="http://localhost:8093/api/getDoctorInfoById";

  getData(){
    return this.http.get<any>(this.Url);
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.Url, {
      username,
      password
    });
  }
  getDataById(id: any): Observable<any> {//username
    return this.http.get(`${this.getdatabyidurl}/${id}`);
  }
  updateData(id: any, data: any): Observable<any> {
    return this.http.put(`${this.updatbyidurl}/${id}`, data);
  }

}
