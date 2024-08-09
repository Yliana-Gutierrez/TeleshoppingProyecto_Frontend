import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpresasTransporteComponent } from './agregar-empresas-transporte.component';

describe('AgregarEmpresasTransporteComponent', () => {
  let component: AgregarEmpresasTransporteComponent;
  let fixture: ComponentFixture<AgregarEmpresasTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEmpresasTransporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEmpresasTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
