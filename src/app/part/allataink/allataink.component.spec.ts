import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllatainkComponent } from './allataink.component';

describe('AllatainkComponent', () => {
  let component: AllatainkComponent;
  let fixture: ComponentFixture<AllatainkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllatainkComponent]
    });
    fixture = TestBed.createComponent(AllatainkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
