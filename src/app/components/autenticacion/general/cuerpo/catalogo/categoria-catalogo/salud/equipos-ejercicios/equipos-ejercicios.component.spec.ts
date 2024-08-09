import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposEjerciciosComponent } from './equipos-ejercicios.component';

describe('EquiposEjerciciosComponent', () => {
  let component: EquiposEjerciciosComponent;
  let fixture: ComponentFixture<EquiposEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposEjerciciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquiposEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
