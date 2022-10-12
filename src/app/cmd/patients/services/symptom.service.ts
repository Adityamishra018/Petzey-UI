import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  headers=new HttpHeaders().set('Content-Type','application/json').set('Access-Control-Allow-Origin','*');

 //private url= "http://localhost:8092/Symptom/symptoms"

  constructor(private http:HttpClient) { }

  symptomdetails:any;
  isAdd:boolean=false;
  editIndex:number=0;

  getsymptomps():Observable<any>{
    return this.http.get<any>('https://patient.learn.skillassure.com/patient/symptom/symptoms',{headers:this.headers});
  }
  addsymptomdata(symptom:any):Observable<any>{

  return this.http.post<any>('https://patient.learn.skillassure.com/patient/symptom/addsymptom',symptom,{headers:this.headers});

  }
  getonesymptom():Observable<any>{
    return this.http.get<any>('https://patient.learn.skillassure.com/patient/symptom/get/'+this.editIndex,{headers:this.headers});
  }

  editsymptomdata(symptom:any):Observable<any>{
    return this.http.put<any>('https://patient.learn.skillassure.com/patient/symptom/edit',symptom,{headers:this.headers});
  }
  deleteSymptom(symptomId:Number){
    return this.http.delete('https://patient.learn.skillassure.com/patient/symptom/delete/'+symptomId,{headers:this.headers});
  }
}
