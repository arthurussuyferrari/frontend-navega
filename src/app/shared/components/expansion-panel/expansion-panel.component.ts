import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { ModalService } from '../../../core/services/modal.service';
import { ContributionModalComponent } from 'src/app/features/dashboard/contribution-modal/contribution-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

interface ContributionData {
  isNew: false,
  value: number;
  percentage: number;
  type: string;
}

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, ButtonComponent, MatDialogModule],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.less'],
  providers: [MatDialog] 
})
export class ExpansionPanelComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() percentage!: number;
  @Output() onChangeValue = new EventEmitter<{ value: number; percentage: number }>();

  constructor(private modalService: ModalService) {}

  changeContribution() {
    this.modalService
          .open<ContributionData, ContributionData>(ContributionModalComponent, { isNew: false, value: this.value, percentage: this.percentage, type: this.title === 'Contribuição Mensal' ? 'mensal' : 'voluntaria',
    })
    .subscribe(result => {
      if (result) {
        this.value = result.value;
        this.percentage = result.percentage;
        this.onChangeValue.emit({ value: this.value, percentage: this.percentage });
      }
    });
  }
}
