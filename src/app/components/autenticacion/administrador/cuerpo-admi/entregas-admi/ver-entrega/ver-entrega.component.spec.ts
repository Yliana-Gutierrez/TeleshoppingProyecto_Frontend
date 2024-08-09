import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEntregaComponent } from './ver-entrega.component';

describe('VerEntregaComponent', () => {
  let component: VerEntregaComponent;
  let fixture: ComponentFixture<VerEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerEntregaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
