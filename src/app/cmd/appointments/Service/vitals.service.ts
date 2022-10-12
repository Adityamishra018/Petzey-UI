import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitals } from '../Model/vitals';

@Injectable({
  providedIn: 'root',
})
export class VitalsService {
  appointid: any;

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  private url = 'https://appointment.learn.skillassure.com/';

  constructor(private http: HttpClient) {}

  /*
  getVitals(): Observable<object>{

    return this.http.get(this.url+"appoinment/get/1",{headers: this.headers});
    //return this.http.get<object>("http://localhost:8091/vitals/getvitals/19",{headers: this.headers});
  }
*/
  //get vitals by appointment id
  getvitalsbyAppointmentid(): Observable<any> {
    // console.log("body"+this.appointid);
    return this.http.get(this.url + 'appointment/get/' + this.appointid, {
      headers: this.headers,
    });
  }

  //edit vitals by appointment id
  editvitals(vital: Vitals): Observable<any> {
    // console.log("body"+this.appointid);
    return this.http.put(
      this.url + 'appointment/savevital/' + this.appointid,
      vital,
      { headers: this.headers }
    );
  }

  /*  //get vitals by vital id
  getVitals(): Observable<object>{

    return this.http.get(this.url+"vitals/getvitals/5",{headers: this.headers});
    //return this.http.get<object>("http://localhost:8091/vitals/getvitals/19",{headers: this.headers});
  }

//save vitals by vital idn
  savevitals(vital:Vitals): Observable<any> {
  
    //console.log(body)
    return this.http.post(this.url + 'vitals/savevitals', vital,{headers: this.headers})
  }
  

 */
}
