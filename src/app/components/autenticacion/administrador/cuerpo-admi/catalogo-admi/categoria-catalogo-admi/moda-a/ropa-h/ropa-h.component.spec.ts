import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaHComponent } from './ropa-h.component';

describe('RopaHComponent', () => {
  let component: RopaHComponent;
  let fixture: ComponentFixture<RopaHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
