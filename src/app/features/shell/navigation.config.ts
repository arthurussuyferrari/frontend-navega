import { NavigationItem } from './navigation.model';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    iconName: 'extract',
    label: 'Ver extrato',
    route: 'statement'
  },
  {
    iconName: 'contribution-month',
    label: 'Contribuição mensal',
    route: 'monthly-contribution'
  },
  {
    iconName: 'bag-cash',
    label: 'Contribuição extra',
    route: 'additional-contribution'
  },
  {
    iconName: 'document',
    label: 'Documentos',
    route: 'documents'
  },
  {
    iconName: 'taxation',
    label: 'Regime de tributação',
    route: 'tax-regime'
  },
  {
    iconName: 'request-benefit',
    label: 'Solicitar benefício',
    route: 'request-benefit'
  },
  {
    iconName: 'extract-view',
    label: 'Extrato regressivo',
    route: 'regressive-statement'
  },
  {
    iconName: 'info',
    label: 'Informações',
    route: 'information'
  }
];
