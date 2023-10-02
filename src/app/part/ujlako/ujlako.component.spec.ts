import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjlakoComponent } from './ujlako.component';

describe('UjlakoComponent', () => {
  let component: UjlakoComponent;
  let fixture: ComponentFixture<UjlakoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjlakoComponent]
    });
    fixture = TestBed.createComponent(UjlakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
