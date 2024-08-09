import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoPielCabelloComponent } from './cuidado-piel-cabello.component';

describe('CuidadoPielCabelloComponent', () => {
  let component: CuidadoPielCabelloComponent;
  let fixture: ComponentFixture<CuidadoPielCabelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuidadoPielCabelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuidadoPielCabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
