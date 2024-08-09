import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDeMujerComponent } from './ropa-de-mujer.component';

describe('RopaDeMujerComponent', () => {
  let component: RopaDeMujerComponent;
  let fixture: ComponentFixture<RopaDeMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RopaDeMujerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopaDeMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
