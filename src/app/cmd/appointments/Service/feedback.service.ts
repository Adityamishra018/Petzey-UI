import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ViewFeedback } from '../Model/ViewFeedback';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  appointmentId:number;
  private url = 'https://appointment.learn.skillassure.com/feedback/get/';

  constructor(private http: HttpClient) {}

  public editflag = new BehaviorSubject<boolean | null>(false);
  public formData = new BehaviorSubject<any | null>(null);

  getFeedback(): Observable<ViewFeedback> {
    return this.http.get<ViewFeedback>(this.url+this.appointmentId);
  }
}
