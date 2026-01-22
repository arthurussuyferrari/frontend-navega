import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ExpansionPanelComponent } from '../../../shared/components/expansion-panel/expansion-panel.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-monthly-contribution',
  standalone: true,
  imports: [CommonModule, NgChartsModule, ExpansionPanelComponent, ButtonComponent],
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less']
})
export class MonthlyContributionComponent {

  
  total = 'R$ 999.999,99';
  monthly = 'R$ 499.999,99';
  voluntary = 'R$ 499.999,99';

  chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Contribuição mensal', 'Contribuição voluntária'],
    datasets: [
      {
        data: [499999.99, 499999.99],
        backgroundColor: ['#E62E6B', '#5B4CC4'],
        borderWidth: 0
      }
    ]
  };

  chartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

}
