import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentserviceService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  constructor(private _http: HttpClient) {}

  //url:string='';
  getComment(id: number): Observable<object> {
    // return this._http.get<object>("assets/cmd.json");
    return this._http.get<object>(
      'https://appointment.learn.skillassure.com/appointment/getcomment/' + id,
      { headers: this.headers }
    );
  }

  saveComment(comment: object) {
    console.log(comment);
    this._http
      .put<object>(
        'https://appointment.learn.skillassure.com/appointment/editcomment',
        comment,
        { headers: this.headers }
      )
      .subscribe((data) => {
        let num = data;
        console.log(num);
      });
  }
}
