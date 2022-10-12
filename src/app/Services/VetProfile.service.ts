import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class VetProfileService {

    constructor() {}

    ngOninit(){

    }

    getVetprofile(arg){}

    updateVetprofile(editedData,vetId){}

}
