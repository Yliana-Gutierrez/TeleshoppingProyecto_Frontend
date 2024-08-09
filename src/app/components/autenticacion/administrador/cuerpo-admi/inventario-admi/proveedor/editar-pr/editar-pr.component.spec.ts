import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrComponent } from './editar-pr.component';

describe('EditarPrComponent', () => {
  let component: EditarPrComponent;
  let fixture: ComponentFixture<EditarPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
