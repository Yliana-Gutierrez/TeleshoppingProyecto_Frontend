import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyeriaAdmiComponent } from './joyeria-admi.component';

describe('JoyeriaAdmiComponent', () => {
  let component: JoyeriaAdmiComponent;
  let fixture: ComponentFixture<JoyeriaAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoyeriaAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoyeriaAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
