import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisoresComponent } from './televisores.component';

describe('TelevisoresComponent', () => {
  let component: TelevisoresComponent;
  let fixture: ComponentFixture<TelevisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
