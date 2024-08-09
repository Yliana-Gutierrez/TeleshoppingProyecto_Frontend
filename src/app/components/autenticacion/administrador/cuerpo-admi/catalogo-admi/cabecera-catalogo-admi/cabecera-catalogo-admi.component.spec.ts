import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraCatalogoAdmiComponent } from './cabecera-catalogo-admi.component';

describe('CabeceraCatalogoAdmiComponent', () => {
  let component: CabeceraCatalogoAdmiComponent;
  let fixture: ComponentFixture<CabeceraCatalogoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraCatalogoAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraCatalogoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
