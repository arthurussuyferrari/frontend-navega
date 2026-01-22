import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UrlPageTextService } from './../../../core/services/url-page-text.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Input() isDrawerOpened!: boolean;
  pageText$: Observable<string>;
  
  
  constructor(private pageTextService: UrlPageTextService) {
    this.pageText$ = this.pageTextService.pageText$;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth < 1024 && this.isDrawerOpened) {
      this.closeDrawer();
    }
  }

  handleArrowDrawer(): void {
    this.toggle.emit(!this.isDrawerOpened);
  }

  refreshPage(): void {
    this.refresh.emit();
  }

  closeDrawer() {
    this.toggle.emit(false)
  }
}
