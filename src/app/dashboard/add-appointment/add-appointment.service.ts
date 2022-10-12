import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';


export class AppointmentService {
  constructor() {}

  getAllParent(){
    return new Observable<{}>();
  }

  getAllPetsByParent(){
    return new Observable<{}>();
  }
}
