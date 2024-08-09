import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEntregaComponent } from './agregar-entrega.component';

describe('AgregarEntregaComponent', () => {
  let component: AgregarEntregaComponent;
  let fixture: ComponentFixture<AgregarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
