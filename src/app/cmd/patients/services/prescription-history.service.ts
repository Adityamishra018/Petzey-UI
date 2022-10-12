
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionHistoryService {


  public editflag = new BehaviorSubject<boolean | null>(false)
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');


   constructor(private http:HttpClient) { }

  private url:string='https://patient.learn.skillassure.com/patient/PrescriptionHistory/Prescription';

  getappointments():Observable<object[]>

    {
        // console.log(this.http.get<number>(this.url+"getappointments"));

        return this.http.get<object[]>('https://patient.learn.skillassure.com/patient/PrescriptionHistory/Prescription',{headers: this.headers});

    }


}