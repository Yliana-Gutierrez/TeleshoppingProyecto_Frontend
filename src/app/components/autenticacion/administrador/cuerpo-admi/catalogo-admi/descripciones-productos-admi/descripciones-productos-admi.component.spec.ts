import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionesProductosAdmiComponent } from './descripciones-productos-admi.component';

describe('DescripcionesProductosAdmiComponent', () => {
  let component: DescripcionesProductosAdmiComponent;
  let fixture: ComponentFixture<DescripcionesProductosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionesProductosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionesProductosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
