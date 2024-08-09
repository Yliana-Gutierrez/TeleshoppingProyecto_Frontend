import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojesAdmiComponent } from './relojes-admi.component';

describe('RelojesAdmiComponent', () => {
  let component: RelojesAdmiComponent;
  let fixture: ComponentFixture<RelojesAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojesAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelojesAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
