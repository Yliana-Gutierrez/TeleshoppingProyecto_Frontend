import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaAComponent } from './moda-a.component';

describe('ModaAComponent', () => {
  let component: ModaAComponent;
  let fixture: ComponentFixture<ModaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
