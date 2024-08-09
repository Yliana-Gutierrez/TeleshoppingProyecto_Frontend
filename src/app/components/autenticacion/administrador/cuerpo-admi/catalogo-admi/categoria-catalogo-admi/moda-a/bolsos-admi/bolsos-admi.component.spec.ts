import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsosAdmiComponent } from './bolsos-admi.component';

describe('BolsosAdmiComponent', () => {
  let component: BolsosAdmiComponent;
  let fixture: ComponentFixture<BolsosAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsosAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsosAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
