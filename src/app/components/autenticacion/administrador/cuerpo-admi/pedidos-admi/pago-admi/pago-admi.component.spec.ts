import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAdmiComponent } from './pago-admi.component';

describe('PagoAdmiComponent', () => {
  let component: PagoAdmiComponent;
  let fixture: ComponentFixture<PagoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
