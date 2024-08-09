import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStComponent } from './crear-st.component';

describe('CrearStComponent', () => {
  let component: CrearStComponent;
  let fixture: ComponentFixture<CrearStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearStComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
