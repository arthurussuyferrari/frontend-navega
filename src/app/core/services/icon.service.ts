import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {

  
  private readonly ICON_PATH = 'assets/images/icons/';

  private readonly ICONS: Record<string, string> = {
    'angle-right': 'angle-right.svg',
    'bag-cash': 'bag_cash.svg',
    'contribution-month': 'contribution_month.svg',
    'document': 'document.svg',
    'extract-view': 'extract_view.svg',
    'extract': 'extract.svg',
    'info': 'info.svg',
    'request-benefit': 'request_benefit.svg',
    'taxation': 'taxation.svg'
  };

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    Object.entries(this.ICONS).forEach(([name, file]) => {
      this.iconRegistry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `${this.ICON_PATH}${file}`
        )
      );
    });

    console.log('IconService carregado');
  }
}
