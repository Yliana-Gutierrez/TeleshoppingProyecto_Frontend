import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrComponent } from './crear-pr.component';

describe('CrearPrComponent', () => {
  let component: CrearPrComponent;
  let fixture: ComponentFixture<CrearPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
