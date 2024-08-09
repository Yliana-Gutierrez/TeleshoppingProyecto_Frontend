import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAdmiComponent } from './pie-admi.component';

describe('PieAdmiComponent', () => {
  let component: PieAdmiComponent;
  let fixture: ComponentFixture<PieAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
