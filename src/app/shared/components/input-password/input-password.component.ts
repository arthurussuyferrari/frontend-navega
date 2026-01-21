import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule],
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.less']
})
export class InputPasswordComponent {

}
