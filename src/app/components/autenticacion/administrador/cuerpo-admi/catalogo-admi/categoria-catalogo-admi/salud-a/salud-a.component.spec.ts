import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludAComponent } from './salud-a.component';

describe('SaludAComponent', () => {
  let component: SaludAComponent;
  let fixture: ComponentFixture<SaludAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
