
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})
export class CardService {
   
    constructor(private http: HttpClient) { }

    getVetprofile(id) {
        var veturl = environment.vetURL;
        return this.http.get(`${veturl}api/Vet/GetVetProfileDetails/${id}`).pipe(
            map((d) => {
                var doctor = d;
                console.log(doctor);
                return doctor;
            })
        );
    }

    getAllVets(){
        var veturl = environment.vetURL;

        return [{Name:"Honey"},{Name:"Tiger"}];

        // return this.http.get(`${veturl}api/Vet/getallVets`)
    }
    
    getAllPets(){
        var petUrl = environment.petURL;

        return [{Name:"Honey"},{Name:"Tiger"}];

        // return this.http.get(`${petUrl}api/pet/getAllpets`)
    }
    
    getAllPetparents(){
        var peturl = environment.petURL;

        return [{Name:"Honey"},{Name:"Tiger"}];

        // return this.http.get(`${peturl}api/pet/parents/getAll`)
    }

    getAllPetsByPetParentId(id){
        var peturl2 = environment.petURL;
        return [{Name:"Honey"},{Name:"Tiger"}];

        // return this.http.get(`${peturl2}api/pet/getPetParentDetails/${id}`)
    }
}