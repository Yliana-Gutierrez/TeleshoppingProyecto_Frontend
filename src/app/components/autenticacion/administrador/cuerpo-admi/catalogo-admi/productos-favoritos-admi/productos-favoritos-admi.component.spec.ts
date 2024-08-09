import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFavoritosAdmiComponent } from './productos-favoritos-admi.component';

describe('ProductosFavoritosAdmiComponent', () => {
  let component: ProductosFavoritosAdmiComponent;
  let fixture: ComponentFixture<ProductosFavoritosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosFavoritosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosFavoritosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
