import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasAdmiComponent } from './entregas-admi.component';

describe('EntregasAdmiComponent', () => {
  let component: EntregasAdmiComponent;
  let fixture: ComponentFixture<EntregasAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregasAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregasAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
