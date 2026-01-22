import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-tax-regime',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './tax-regime.component.html',
  styleUrls: ['./tax-regime.component.less']
})
export class TaxRegimeComponent {

}
