import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticosAdmiComponent } from './electrodomesticos-admi.component';

describe('ElectrodomesticosAdmiComponent', () => {
  let component: ElectrodomesticosAdmiComponent;
  let fixture: ComponentFixture<ElectrodomesticosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrodomesticosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectrodomesticosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
