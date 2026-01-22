import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-request-benefit',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './request-benefit.component.html',
  styleUrls: ['./request-benefit.component.less']
})
export class RequestBenefitComponent {

}
