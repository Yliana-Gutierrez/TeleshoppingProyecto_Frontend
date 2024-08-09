import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplementosVitaminasComponent } from './suplementos-vitaminas.component';

describe('SuplementosVitaminasComponent', () => {
  let component: SuplementosVitaminasComponent;
  let fixture: ComponentFixture<SuplementosVitaminasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuplementosVitaminasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuplementosVitaminasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
