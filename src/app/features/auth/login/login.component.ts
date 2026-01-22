import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BackgroundComponent } from './../../../shared/components/background/background.component';
import { InputComponent } from './../../../shared/components/input/input.component';
import { InputPasswordComponent } from './../../../shared/components/input-password/input-password.component';
import { ButtonComponent } from './../../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, BackgroundComponent, InputComponent, InputPasswordComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  formLogin!: FormGroup

    constructor(
    private form: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) { 
    this.createForm();
  }

  private createForm() {
    this.formLogin = this.form.group({
      login: ['', [Validators.required]], 
      password: ['', [Validators.required]]      
    });
  }

  login() {
    const login = this.formLogin.get('login')?.value;
    const password = this.formLogin.get('password')?.value;

    this.authService.signIn(login, password).subscribe(success => {
      if (success) {
        console.log(`sucesso`)
        this.router.navigate(['/app']); 
      } else {
        alert('Login ou senha incorretos');
      }
    });
  }
}
