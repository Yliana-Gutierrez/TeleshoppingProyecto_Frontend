import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCatalogoComponent } from './categoria-catalogo.component';

describe('CategoriaCatalogoComponent', () => {
  let component: CategoriaCatalogoComponent;
  let fixture: ComponentFixture<CategoriaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
