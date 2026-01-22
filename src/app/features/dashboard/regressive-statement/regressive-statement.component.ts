import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-regressive-statement',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './regressive-statement.component.html',
  styleUrls: ['./regressive-statement.component.less']
})
export class RegressiveStatementComponent {

}
