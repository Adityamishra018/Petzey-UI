import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetparentProfileComponent } from './petparent-profile.component';

describe('PetparentProfileComponent', () => {
  let component: PetparentProfileComponent;
  let fixture: ComponentFixture<PetparentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetparentProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetparentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
