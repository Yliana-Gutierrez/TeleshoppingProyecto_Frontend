import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFavoritosComponent } from './productos-favoritos.component';

describe('ProductosFavoritosComponent', () => {
  let component: ProductosFavoritosComponent;
  let fixture: ComponentFixture<ProductosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosFavoritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
