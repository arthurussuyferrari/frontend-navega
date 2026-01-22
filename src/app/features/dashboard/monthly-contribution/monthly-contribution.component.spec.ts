import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyContributionComponent } from './monthly-contribution.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalService } from 'src/app/core/services/modal.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('MonthlyContributionComponent', () => {
  let component: MonthlyContributionComponent;
  let fixture: ComponentFixture<MonthlyContributionComponent>;
  let modalServiceMock: any;

  beforeEach(async () => {
    modalServiceMock = {
      open: jasmine.createSpy('open').and.returnValue(of(null))
    };

    await TestBed.configureTestingModule({
      imports: [MonthlyContributionComponent, NoopAnimationsModule],
      providers: [
        { provide: ModalService, useValue: modalServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve atualizar quando ontribuicoes forem adiiconads', () => {
    component.updateContribution(1, { value: 1000, percentage: 10 });
    expect(component.contributions.find(c => c.id === 1)?.value).toBe(1000);
    expect(component.contributions.find(c => c.id === 1)?.percentage).toBe(10);
    expect(component.total).toBeCloseTo(1000 + 195969.99, 2);
  });

  it('deve abrir o modalr', () => {
    component.addContribution();
    expect(modalServiceMock.open).toHaveBeenCalled();
    expect(component.contributions.length).toBe(2);
  });

});
