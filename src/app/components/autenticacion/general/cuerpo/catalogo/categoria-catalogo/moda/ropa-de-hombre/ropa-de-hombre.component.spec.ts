import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDeHombreComponent } from './ropa-de-hombre.component';

describe('RopaDeHombreComponent', () => {
  let component: RopaDeHombreComponent;
  let fixture: ComponentFixture<RopaDeHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDeHombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopaDeHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
