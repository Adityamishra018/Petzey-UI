import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  public editflag = new BehaviorSubject<boolean | null>(false);
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) {}

  private url: string =
    'https://appointment.learn.skillassure.com/appointment/api/totalAppointments';
  private url1: string =
    'https://appointment.learn.skillassure.com/appointment/api/cancelledAppointments';
  private url2: string =
    'https://appointment.learn.skillassure.com/appointment/api/acceptedAppointments';
  private url3: string =
    'https://appointment.learn.skillassure.com/appointment/api/allAppointments';
  private url4: String =
    'https://appointment.learn.skillassure.com/appointment/api/getfilterconfirmedAppointments';
  private url5: String =
    'https://appointment.learn.skillassure.com/appointment/api/getfiltercancelledAppointments';
  private url6: String =
    'https://appointment.learn.skillassure.com/appointment/api/getfilterclosedAppointments';
  private url7: String =
    'https://appointment.learn.skillassure.com/appointment/updateappointment/';

  getappointments(): Observable<number> {
    // console.log(this.http.get<number>(this.url+"getappointments"));

    return this.http.get<number>(
      'https://appointment.learn.skillassure.com/appointment/api/totalAppointments'
    );
  }
  getaccepted(): Observable<number> {
    // console.log(this.http.get<number>(this.url+"getappointments"));

    return this.http.get<number>(
      'https://appointment.learn.skillassure.com/appointment/api/acceptedAppointments'
    );
  }
  getcancelled(): Observable<number> {
    // console.log(this.http.get<number>(this.url+"getappointments"));

    return this.http.get<number>(
      'https://appointment.learn.skillassure.com/appointment/api/cancelledAppointments'
    );
  }
  getviewallappointments(): Observable<object> {
    return this.http.get<object[]>(
      'https://appointment.learn.skillassure.com/appointment/api/allAppointments'
    );
  }
  getfilterconfirmedappointments(): Observable<object> {
    return this.http.get<object[]>(
      'https://appointment.learn.skillassure.com/appointment/api/getfilterconfirmedAppointments'
    );
  }
  getfiltercancelledappointments(): Observable<object> {
    return this.http.get<object[]>(
      'https://appointment.learn.skillassure.com/appointment/api/getfiltercancelledAppointments'
    );
  }
  getfilterclosedappointments(): Observable<object> {
    return this.http.get<object[]>(
      'https://appointment.learn.skillassure.com/appointment/api/getfilterclosedAppointments'
    );
  }
  canceloracceptappointment(id: any, status: any) {
    console.log(id + status);
    var response = this.http.put(
      'https://appointment.learn.skillassure.com/appointment/api/updateappointment/' +
        id +
        ',' +
        status,
      { headers: this.headers }
    );
    console.log(response);
    return response;
  }
  deleteappointment(id: any) {
    console.log(id);
    this.http.delete(
      'https://appointment.learn.skillassure.com/appointment/api/appointment/' +
        id
    );
  }
  pendingappointments() {
    return this.http.get<object[]>(
      'https://appointment.learn.skillassure.com/appointment/api/pending'
    );
  }
}
