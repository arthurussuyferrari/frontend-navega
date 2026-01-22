import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NAVIGATION_ITEMS } from '../navigation.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {
  @Output() closeDrawer = new EventEmitter()

  readonly menuItens = NAVIGATION_ITEMS

  handleCloseDrawer() {
    console.log(window.innerWidth)
    if (window.innerWidth < 1024) {
      this.closeDrawer.emit();
    }
  }

}
