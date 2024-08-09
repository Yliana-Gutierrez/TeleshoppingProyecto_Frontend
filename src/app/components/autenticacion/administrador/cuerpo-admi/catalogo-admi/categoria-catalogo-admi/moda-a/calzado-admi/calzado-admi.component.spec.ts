import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoAdmiComponent } from './calzado-admi.component';

describe('CalzadoAdmiComponent', () => {
  let component: CalzadoAdmiComponent;
  let fixture: ComponentFixture<CalzadoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalzadoAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalzadoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
