import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeronComponent } from './heron.component';

describe('HeronComponent', () => {
  let component: HeronComponent;
  let fixture: ComponentFixture<HeronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeronComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
