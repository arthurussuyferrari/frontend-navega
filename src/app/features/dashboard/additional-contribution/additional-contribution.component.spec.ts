import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalContributionComponent } from './additional-contribution.component';

describe('AdditionalContributionComponent', () => {
  let component: AdditionalContributionComponent;
  let fixture: ComponentFixture<AdditionalContributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdditionalContributionComponent]
    });
    fixture = TestBed.createComponent(AdditionalContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
