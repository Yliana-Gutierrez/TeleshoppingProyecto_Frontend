import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosVitaminasAdmiComponent } from './suplementos-vitaminas-admi.component';

describe('SuplementosVitaminasAdmiComponent', () => {
  let component: SuplementosVitaminasAdmiComponent;
  let fixture: ComponentFixture<SuplementosVitaminasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuplementosVitaminasAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuplementosVitaminasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
