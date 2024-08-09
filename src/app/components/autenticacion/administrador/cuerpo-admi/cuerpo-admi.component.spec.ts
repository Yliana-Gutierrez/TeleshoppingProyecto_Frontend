import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAdmiComponent } from './cuerpo-admi.component';

describe('CuerpoAdmiComponent', () => {
  let component: CuerpoAdmiComponent;
  let fixture: ComponentFixture<CuerpoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuerpoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
