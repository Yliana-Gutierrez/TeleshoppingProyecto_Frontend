import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsAdmiComponent } from './laptops-admi.component';

describe('LaptopsAdmiComponent', () => {
  let component: LaptopsAdmiComponent;
  let fixture: ComponentFixture<LaptopsAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopsAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
