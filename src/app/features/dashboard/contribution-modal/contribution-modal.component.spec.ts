import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContributionModalComponent } from './contribution-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ContributionModalComponent', () => {
  let component: ContributionModalComponent;
  let fixture: ComponentFixture<ContributionModalComponent>;
  let dialogRefMock: any;

  const mockData = {
    isNew: false,
    type: 'mensal',
    value: 100,
    percentage: 5
  };

  beforeEach(async () => {
    dialogRefMock = { close: jasmine.createSpy('close') };

    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent, NoopAnimationsModule],
      declarations: [],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContributionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });


  it('deve desabilitar o campo de porcentagem se a contribuicao for voluntária', () => {
    component.form.get('type')?.setValue('voluntaria');
    fixture.detectChanges();
    expect(component.form.get('percentage')?.disabled).toBeTrue();
  });

  it('deve habilitar o campo de porcentagm se a contribuicao for mensal', () => {
    component.form.get('type')?.setValue('mensal');
    fixture.detectChanges();
    expect(component.form.get('percentage')?.enabled).toBeTrue();
  });

});
