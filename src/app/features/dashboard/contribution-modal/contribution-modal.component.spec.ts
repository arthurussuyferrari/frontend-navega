import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionModalComponent } from './contribution-modal.component';

describe('ContributionModalComponent', () => {
  let component: ContributionModalComponent;
  let fixture: ComponentFixture<ContributionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContributionModalComponent]
    });
    fixture = TestBed.createComponent(ContributionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
