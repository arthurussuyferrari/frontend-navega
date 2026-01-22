import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatedLayoutComponent } from './authenticated-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('AuthenticatedLayoutComponent', () => {
  let component: AuthenticatedLayoutComponent;
  let fixture: ComponentFixture<AuthenticatedLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthenticatedLayoutComponent, NoopAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: {}, params: {} } }
      ]
    });
    
    fixture = TestBed.createComponent(AuthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
