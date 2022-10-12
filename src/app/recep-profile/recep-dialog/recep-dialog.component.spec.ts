import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepDialogComponent } from './recep-dialog.component';

describe('RecepDialogComponent', () => {
  let component: RecepDialogComponent;
  let fixture: ComponentFixture<RecepDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
