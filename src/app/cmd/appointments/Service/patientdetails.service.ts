import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientdetailsService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  constructor(private _http: HttpClient) {}

  getPatientDetails(id: number): Observable<object> {
    return this._http.get<object>(
      'https://appointment.learn.skillassure.com/appointment/getpatient/' + id,
      { headers: this.headers }
    );
  }
}
