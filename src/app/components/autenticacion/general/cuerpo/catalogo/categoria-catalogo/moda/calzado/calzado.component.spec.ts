import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoComponent } from './calzado.component';

describe('CalzadoComponent', () => {
  let component: CalzadoComponent;
  let fixture: ComponentFixture<CalzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
