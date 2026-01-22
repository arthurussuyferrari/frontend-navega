import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent {

}
