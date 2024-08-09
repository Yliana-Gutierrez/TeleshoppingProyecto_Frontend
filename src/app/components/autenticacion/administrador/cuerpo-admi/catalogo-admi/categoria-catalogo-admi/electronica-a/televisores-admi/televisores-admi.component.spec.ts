import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisoresAdmiComponent } from './televisores-admi.component';

describe('TelevisoresAdmiComponent', () => {
  let component: TelevisoresAdmiComponent;
  let fixture: ComponentFixture<TelevisoresAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisoresAdmiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisoresAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
