import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAdmiComponent } from './perfil-admi.component';

describe('PerfilAdmiComponent', () => {
  let component: PerfilAdmiComponent;
  let fixture: ComponentFixture<PerfilAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
