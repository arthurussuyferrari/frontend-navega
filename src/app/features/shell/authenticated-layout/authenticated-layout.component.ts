import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoadingComponent } from './../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-authenticated-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, HeaderComponent, NavigationComponent, LoadingComponent],
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.less']
})
export class AuthenticatedLayoutComponent {
  isDrawerOpened: boolean = true
  isLoading: boolean = false
  drawerMode: 'side' | 'over' = 'side';

  constructor() {
    this.updateDrawerMode();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDrawerMode();
  }
  
  toggleDrawer(value: boolean): void {
    this.isDrawerOpened = value
  }

  closeDrawer(): void {
    this.isDrawerOpened = false
  }

  refreshData() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  private updateDrawerMode() {
    this.drawerMode = window.innerWidth < 1024 ? 'over' : 'side';

    if (this.drawerMode === 'over' && this.isDrawerOpened) {
      this.isDrawerOpened = false;
    }
  }

}
