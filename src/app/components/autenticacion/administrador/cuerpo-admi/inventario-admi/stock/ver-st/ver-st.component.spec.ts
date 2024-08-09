import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerStComponent } from './ver-st.component';

describe('VerStComponent', () => {
  let component: VerStComponent;
  let fixture: ComponentFixture<VerStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerStComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
