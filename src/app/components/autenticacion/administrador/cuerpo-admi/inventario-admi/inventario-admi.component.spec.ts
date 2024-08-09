import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioAdmiComponent } from './inventario-admi.component';

describe('InventarioAdmiComponent', () => {
  let component: InventarioAdmiComponent;
  let fixture: ComponentFixture<InventarioAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventarioAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
