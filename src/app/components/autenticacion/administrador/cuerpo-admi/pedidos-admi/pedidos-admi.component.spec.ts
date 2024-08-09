import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdmiComponent } from './pedidos-admi.component';

describe('PedidosAdmiComponent', () => {
  let component: PedidosAdmiComponent;
  let fixture: ComponentFixture<PedidosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
