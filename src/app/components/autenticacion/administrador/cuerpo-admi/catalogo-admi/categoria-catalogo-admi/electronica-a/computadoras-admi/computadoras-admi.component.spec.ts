import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorasAdmiComponent } from './computadoras-admi.component';

describe('ComputadorasAdmiComponent', () => {
  let component: ComputadorasAdmiComponent;
  let fixture: ComponentFixture<ComputadorasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputadorasAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputadorasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
