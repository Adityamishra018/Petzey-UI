import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Config } from "@fortawesome/fontawesome-svg-core";



@Injectable({
providedIn:"root"
})



export class FeedbackFormService {
headers=new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');
// baseUrl:any="http://localhost:8092/givefeedback/add"

editflag: any;

constructor(private http: HttpClient){}
public formData = new BehaviorSubject<any | null>(null)


// create(data:any): Observable<any> {
// const headers = { 'content-type': 'application/json'}
// const body=JSON.stringify(data);
// console.log(data)
// debugger
// return this.http.post(this.baseUrl, body,{'headers':headers})
// }



create(data:any):Observable<any>{
return this.http.post<any>('https://patient.learn.skillassure.com/patient/givefeedback/add',data,{headers:this.headers});
}



update(data:any, id: any):Observable<any>{
return this.http.put<any>(`https://patient.learn.skillassure.com/patient/givefeedback/edit/${id}`,data,{headers:this.headers});
}

view(id:any):Observable<any>{
    debugger
return this.http.get<Config>(`https://patient.learn.skillassure.com/patient/givefeedback/get/${id}`);
}




}