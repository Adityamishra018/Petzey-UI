import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {
  drDetails,
  drRecommendation,
} from '../component/view-appointment/components/view-edit-recommendation/view-edit-recommendation.component';

@Injectable({
  providedIn: 'root',
})
export class RecommendationService {
  url = 'https://appointment.learn.skillassure.com/recommendation/rec';
  header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  constructor(private _http: HttpClient) {}
  showNames(): Observable<drDetails[]> {
    return this._http.get<drDetails[]>(this.url + '/doctors', {
      headers: this.header,
    });
  }
  addDrNames(Details: drRecommendation) {
    console.log('dr email id' + Details.doctor.mailId);
    return this._http.post<drRecommendation>(this.url, Details, {
      headers: this.header,
    });
  }
  getRecommendation(): Observable<drRecommendation[]> {
    return this._http.get<drRecommendation[]>(this.url, {
      headers: this.header,
    });
  }
  deleteRecommendation(recId: Number): Observable<any> {
    console.log('my Id  ' + recId);
    return this._http.delete(this.url + '/' + recId, { headers: this.header });
  }

  updateAppointment(
    appId: Number,
    appointmentList: drRecommendation[]
  ): Observable<drRecommendation[]> {
    return this._http.put<drRecommendation[]>(
      'https://appointment.learn.skillassure.com/appointment/appoint/' + appId,
      appointmentList,
      { headers: this.header }
    );
  }
  getRecommendationForAppointmnet(
    appId: Number
  ): Observable<drRecommendation[]> {
    return this._http.get<drRecommendation[]>(
      'https://appointment.learn.skillassure.com/appointment/appoint/' + appId,
      { headers: this.header }
    );
  }
  deleteAppointment(id: Number, recId: Number): Observable<any> {
    return this._http.delete(
      'https://appointment.learn.skillassure.com/appointment/appoint/' +
        id +
        ',' +
        recId,
      { headers: this.header }
    );
  }
}
