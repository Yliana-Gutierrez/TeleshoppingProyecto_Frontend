import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoPielCabelloAdmiComponent } from './cuidado-piel-cabello-admi.component';

describe('CuidadoPielCabelloAdmiComponent', () => {
  let component: CuidadoPielCabelloAdmiComponent;
  let fixture: ComponentFixture<CuidadoPielCabelloAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuidadoPielCabelloAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuidadoPielCabelloAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
