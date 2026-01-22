import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BackgroundComponent } from './../../../shared/components/background/background.component';
import { InputComponent } from './../../../shared/components/input/input.component';
import { ButtonComponent } from './../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InputComponent,
    ButtonComponent,
    BackgroundComponent,
    ReactiveFormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent {

  formForgot!: FormGroup;

  constructor(
    private form: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm() {
    this.formForgot = this.form.group({
      emailOrCpf: ['', [Validators.required]]
    });
  }

  submit() {
    alert('Se existir uma conta com esse e-mail ou CPF, você receberá instruções por e-mail.');
    this.router.navigate(['/login']);
  }
}
