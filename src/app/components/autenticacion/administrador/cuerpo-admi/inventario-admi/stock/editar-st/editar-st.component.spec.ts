import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStComponent } from './editar-st.component';

describe('EditarStComponent', () => {
  let component: EditarStComponent;
  let fixture: ComponentFixture<EditarStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarStComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
