import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterasAdmiComponent } from './carteras-admi.component';

describe('CarterasAdmiComponent', () => {
  let component: CarterasAdmiComponent;
  let fixture: ComponentFixture<CarterasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarterasAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarterasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
