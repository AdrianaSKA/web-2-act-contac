import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeropComponent } from './herop.component';

describe('HeropComponent', () => {
  let component: HeropComponent;
  let fixture: ComponentFixture<HeropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
