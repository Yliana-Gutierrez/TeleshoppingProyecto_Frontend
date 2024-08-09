import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCatalogoAdmiComponent } from './categoria-catalogo-admi.component';

describe('CategoriaCatalogoAdmiComponent', () => {
  let component: CategoriaCatalogoAdmiComponent;
  let fixture: ComponentFixture<CategoriaCatalogoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCatalogoAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaCatalogoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
