import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from './../../../shared/components/background/background.component';
import { InputComponent } from './../../../shared/components/input/input.component';
import { InputPasswordComponent } from './../../../shared/components/input-password/input-password.component';
import { ButtonComponent } from './../../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, BackgroundComponent, InputComponent, InputPasswordComponent,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

}
