import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegimeComponent } from './tax-regime.component';

describe('TaxRegimeComponent', () => {
  let component: TaxRegimeComponent;
  let fixture: ComponentFixture<TaxRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaxRegimeComponent]
    });
    fixture = TestBed.createComponent(TaxRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
