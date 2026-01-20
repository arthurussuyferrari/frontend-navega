import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      <aside>MENU</aside>
      <main>
        <router-outlet />
      </main>
    </div>
  
  `,
  styleUrls: ['./authenticated-layout.component.less']
})
export class AuthenticatedLayoutComponent {

}
