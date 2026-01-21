import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.less']
})
export class AuthenticatedLayoutComponent {

}
