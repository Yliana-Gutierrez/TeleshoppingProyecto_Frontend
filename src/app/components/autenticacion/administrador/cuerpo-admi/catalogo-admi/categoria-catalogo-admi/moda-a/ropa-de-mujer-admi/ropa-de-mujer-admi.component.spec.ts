import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDeMujerAdmiComponent } from './ropa-de-mujer-admi.component';

describe('RopaDeMujerAdmiComponent', () => {
  let component: RopaDeMujerAdmiComponent;
  let fixture: ComponentFixture<RopaDeMujerAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDeMujerAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopaDeMujerAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
