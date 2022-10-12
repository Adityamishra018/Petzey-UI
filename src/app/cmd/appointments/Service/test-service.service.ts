import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { test } from '../../appointments/component/view-appointment/components/view-edit-test/view-edit-test.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  constructor(private http: HttpClient) {}
  private url = 'https://appointment.learn.skillassure.com/';

  getTests(): Observable<test[]> {
    // console.log(this.http.get<test[]>(this.url+"getalltests"));
    return this.http.get<test[]>(this.url + 'test/getalltests', {
      headers: this.headers,
    });
  }
  getTestbyId(id: any) {
    return this.http.get<test[]>(this.url + 'test/getOnetest/' + id, {
      headers: this.headers,
    });
  }

  addTestToAppointment(t: test[], id: any) {
    var response = this.http.put(this.url + 'appointment/updateApp/' + id, t, {
      headers: this.headers,
    });
    console.log(t);
    return response;
  }
  getTestsofAppointment(id: any) {
    var response = this.http.get(
      this.url + 'appointment/getAllTestForAppointment/' + id,
      { headers: this.headers }
    );
    return response;
  }
  deleteTestsofAppointment(id: any, testId: any) {
    var response = this.http.delete(
      this.url + 'appointment/deleteTests/' + id + ',' + testId,
      { headers: this.headers }
    );
    return response;
  }
}
