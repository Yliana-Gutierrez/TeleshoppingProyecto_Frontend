import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraAdmiComponent } from './cabecera-admi.component';

describe('CabeceraAdmiComponent', () => {
  let component: CabeceraAdmiComponent;
  let fixture: ComponentFixture<CabeceraAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabeceraAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
