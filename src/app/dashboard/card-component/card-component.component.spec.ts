import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { CardComponentComponent } from './card-component.component';
import { CardService } from './card.service';

describe('CardComponentComponent', () => {
  let component: CardComponentComponent;
  let fixture: ComponentFixture<CardComponentComponent>;
  let service:CardService;
  let http:HttpClient;
  let httpTestingController:HttpTestingController;
  let mockPetData:any;
  let mockVetData:any;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentComponent],
      imports: [HttpClientModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(CardService);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockPetData = {
      Id: 1,
      Name: "Doggo",
      OwnerName: "raju",
      PetDOB: "2021-08-20T00:00:00",
      gender: "MALE",
    };
    mockVetData = {
      NPINum: 12345679,
      Speciality: "Determetologist",
      VetId: 1,
      VetName: "Rosie Jhon",
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should return the all pet details',() => {
  //   service.getAllPets().subscribe((res) => {
  //     expect(res).toEqual(mockPetData);
  //   });
  //   const req = httpTestingController.match({
  //     method:'GET',
  //     url:`${environment.petURL}api/pet/getAllpets`
  //   });
  //   expect(http.get).toHaveBeenCalledTimes(1);
  // })
  // it('should return the all Vet details',() => {
  //   service.getAllVets().subscribe((res) => {
  //     expect(res).toEqual(mockVetData);
  //   });
  //   const req = httpTestingController.match({
  //     method:'GET',
  //     url:`${environment.vetURL}api/Vet/getallVets`
  //   });
  //    expect(http.get).toHaveBeenCalledTimes(1);
  // })
  
});
