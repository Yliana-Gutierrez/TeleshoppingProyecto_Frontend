import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquillajeAdmiComponent } from './maquillaje-admi.component';

describe('MaquillajeAdmiComponent', () => {
  let component: MaquillajeAdmiComponent;
  let fixture: ComponentFixture<MaquillajeAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquillajeAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaquillajeAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
