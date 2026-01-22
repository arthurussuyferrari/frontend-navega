import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, ButtonComponent],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.less']
})
export class ExpansionPanelComponent {

}
