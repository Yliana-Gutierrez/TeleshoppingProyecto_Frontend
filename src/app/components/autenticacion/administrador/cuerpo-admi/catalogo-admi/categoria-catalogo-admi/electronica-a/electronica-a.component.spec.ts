import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaAComponent } from './electronica-a.component';

describe('ElectronicaAComponent', () => {
  let component: ElectronicaAComponent;
  let fixture: ComponentFixture<ElectronicaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicaAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectronicaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
