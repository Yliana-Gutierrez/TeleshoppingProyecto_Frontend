import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterasComponent } from './carteras.component';

describe('CarterasComponent', () => {
  let component: CarterasComponent;
  let fixture: ComponentFixture<CarterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarterasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
