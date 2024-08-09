import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesAdmiComponent } from './celulares-admi.component';

describe('CelularesAdmiComponent', () => {
  let component: CelularesAdmiComponent;
  let fixture: ComponentFixture<CelularesAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelularesAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CelularesAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
