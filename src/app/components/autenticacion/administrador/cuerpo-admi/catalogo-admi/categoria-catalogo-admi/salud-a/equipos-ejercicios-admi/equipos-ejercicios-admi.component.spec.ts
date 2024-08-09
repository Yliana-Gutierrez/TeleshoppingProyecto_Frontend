import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposEjerciciosAdmiComponent } from './equipos-ejercicios-admi.component';

describe('EquiposEjerciciosAdmiComponent', () => {
  let component: EquiposEjerciciosAdmiComponent;
  let fixture: ComponentFixture<EquiposEjerciciosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposEjerciciosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquiposEjerciciosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
