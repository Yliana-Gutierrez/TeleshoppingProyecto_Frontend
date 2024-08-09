import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraCatalogoComponent } from './cabecera-catalogo.component';

describe('CabeceraCatalogoComponent', () => {
  let component: CabeceraCatalogoComponent;
  let fixture: ComponentFixture<CabeceraCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
