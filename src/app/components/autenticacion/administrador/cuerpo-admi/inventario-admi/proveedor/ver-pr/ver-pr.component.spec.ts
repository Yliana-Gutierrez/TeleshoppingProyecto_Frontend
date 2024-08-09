import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPrComponent } from './ver-pr.component';

describe('VerPrComponent', () => {
  let component: VerPrComponent;
  let fixture: ComponentFixture<VerPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
