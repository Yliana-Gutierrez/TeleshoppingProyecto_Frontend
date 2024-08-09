import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasAdmiComponent } from './quejas-admi.component';

describe('QuejasAdmiComponent', () => {
  let component: QuejasAdmiComponent;
  let fixture: ComponentFixture<QuejasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuejasAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuejasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
