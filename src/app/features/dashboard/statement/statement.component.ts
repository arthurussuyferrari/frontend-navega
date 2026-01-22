import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';


@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.less']
})
export class StatementComponent {

}
