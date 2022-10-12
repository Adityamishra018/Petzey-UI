import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditRecommendationComponent } from './view-edit-recommendation.component';

describe('ViewEditRecommendationComponent', () => {
  let component: ViewEditRecommendationComponent;
  let fixture: ComponentFixture<ViewEditRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
