import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-additional-contribution',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './additional-contribution.component.html',
  styleUrls: ['./additional-contribution.component.less']
})
export class AdditionalContributionComponent {

}
