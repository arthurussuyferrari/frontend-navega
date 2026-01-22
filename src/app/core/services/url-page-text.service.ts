import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlPageTextService {
  private _pageText = new BehaviorSubject<string>('Página Inicial');
  pageText$ = this._pageText.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url.split('/').pop() || '';
        this._pageText.next(this.getTextForPath(url));
      });
  }

  private getTextForPath(path: string): string {
    switch (path) {
      case 'statement': return 'Extrato';
      case 'monthly-contribution': return 'Contribuição Mensal';
      case 'additional-contribution': return 'Contribuição Adicional';
      case 'documents': return 'Documentos';
      case 'tax-regime': return 'Regime Tributário';
      case 'request-benefit': return 'Solicitar Benefício';
      case 'regressive-statement': return 'Extrato Regressivo';
      case 'information': return 'Informações';
      case '': return 'Contribuição Mensal'; 
      default: return 'Página';
    }
  }
}
