import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './../../../shared/components/button/button.component';
import { BackgroundComponent } from './../../../shared/components/background/background.component';
import { InputComponent } from './../../../shared/components/input/input.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterModule, InputComponent, ButtonComponent, BackgroundComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent {

}
