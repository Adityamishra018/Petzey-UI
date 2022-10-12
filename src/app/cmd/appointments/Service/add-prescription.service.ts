import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescriptions } from '../Model/Prescriptions';
import { AppointmentsService } from './appointments.service';


@Injectable({
  providedIn: 'root'
})
export class AddPrescriptionService {

  constructor(private _http:HttpClient) {}
 
  appointmentId:any;
  prescriptionDetails!: Prescriptions[];
  isAdd:boolean=false;
  editIndex:number=0;  
  url:string='https://appointment.learn.skillassure.com/Prescriptions';


     getOneprescriptionDetails():Observable<any>{    
      return this._http.get<any>(this.url+'/getone/'+this.editIndex);
      } 
   
    deleteprescriptionDetails(medicineId:Number){
      
        return this._http.delete(this.url+'/delete/'+medicineId);
    }
    editPrescriptionDetails(medicine:any):Observable<any>{
     
      return this._http.put<any>(this.url+'/update/'+this.editIndex,medicine);
      
    }

 
  getAppointment(id:any):Observable<Prescriptions[]>{
   
    return this._http.get<Prescriptions[]>(this.url+'/get/'+id);
  }
  addAppointment(appointment:any):Observable<any>{
   
    return this._http.post<any>(this.url+'/add/'+this.appointmentId,appointment);
  
  }

}
