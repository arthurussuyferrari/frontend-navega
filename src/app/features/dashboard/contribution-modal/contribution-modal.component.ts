import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputComponent } from '../../../shared/components/input/input.component';


interface ContributionInput {
  isNew: boolean;
  type: 'mensal' | 'voluntaria';
  value: number;
  percentage?: number;
}

@Component({
  selector: 'app-contribution-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './contribution-modal.component.html',
  styleUrls: ['./contribution-modal.component.less']
})


export class ContributionModalComponent {
  form!: FormGroup;
  title!: string;
  isNew!: boolean;

  constructor(
  private fb: FormBuilder,
  private dialogRef: MatDialogRef<ContributionModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: ContributionInput
) {
    this.isNew = data.isNew;
    this.title = data.isNew ? 'Incluir Contribuição' : 'Alterar Contribuição';
    console.log(data)
    this.form = this.fb.group({
      type: [data.type ?? 'mensal', this.isNew ? [Validators.required] : []],
      value: [data.value ?? null, [Validators.required]],
      percentage: [
        data.percentage ?? null,
        data.type === 'mensal' || this.isNew ? [Validators.required] : []
      ]
    });

    if (data.type === 'voluntaria') {
      this.form.get('percentage')?.disable();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
