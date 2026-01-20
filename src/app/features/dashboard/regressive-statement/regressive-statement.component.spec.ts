import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressiveStatementComponent } from './regressive-statement.component';

describe('RegressiveStatementComponent', () => {
  let component: RegressiveStatementComponent;
  let fixture: ComponentFixture<RegressiveStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegressiveStatementComponent]
    });
    fixture = TestBed.createComponent(RegressiveStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
