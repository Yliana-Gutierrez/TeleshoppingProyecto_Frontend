import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionesProductosComponent } from './descripciones-productos.component';

describe('DescripcionesProductosComponent', () => {
  let component: DescripcionesProductosComponent;
  let fixture: ComponentFixture<DescripcionesProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionesProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionesProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
