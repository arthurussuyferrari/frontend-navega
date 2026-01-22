import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ExpansionPanelComponent } from '../../../shared/components/expansion-panel/expansion-panel.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from 'src/app/core/services/modal.service';
import { ContributionModalComponent } from '../contribution-modal/contribution-modal.component';

interface Contribution {
  id: number;
  title: string;
  value: number;
  percentage: number;
}

interface ContributionInput {
  isNew: boolean,
  type: 'mensal' | 'voluntaria';
  value: number;
  percentage?: number;
}

@Component({
  selector: 'app-monthly-contribution',
  standalone: true,
  imports: [CommonModule, NgChartsModule, ExpansionPanelComponent, ButtonComponent, MatDialogModule],
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less']
})
export class MonthlyContributionComponent {

  constructor(private modalService: ModalService) {
    this.updateTotal()
  }

  total = 0

  contributions: Contribution[] = [
    { id: 1, title: 'Contribuição Mensal', value: 499999.99, percentage: 5 },
    { id: 2, title: 'Contribuição Voluntária', value: 195969.99, percentage: 0 },
  ];

  chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.contributions.map(c => c.title),
    datasets: [
      {
        data: this.contributions.map(c => c.value),
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
      legend: { display: false },
      tooltip: { enabled: false }
    }
  };

  addContribution() {
this.modalService
  .open<ContributionInput, ContributionInput>(ContributionModalComponent, {
    isNew: true,
    type: 'mensal', 
    value: 0,
    percentage: 0
  })
  .subscribe(result => {
    if (result) {
      const newContribution: Contribution = {
        id: this.contributions.length + 1,
        title: result.type === 'mensal' ? 'Contribuição Mensal' : 'Contribuição Voluntária',
        value: result.value,
        percentage: result.type === 'mensal' ? result.percentage! : 0
      };
      this.contributions.push(newContribution);
      this.updateChart();
      this.updateTotal()
    }
  });
  }

  updateContribution(id: number, newData: { value: number; percentage: number }) {
    const contribution = this.contributions.find(c => c.id === id);
    if (contribution) {
      contribution.value = newData.value;
      contribution.percentage = newData.percentage;
      this.updateChart();
      this.updateTotal(); 
    }
  }

  updateChart() {
    const mensal = this.contributions
      .filter(c => c.title === 'Contribuição Mensal')
      .reduce((acc, c) => acc + Number(c.value), 0);

    const voluntaria = this.contributions
      .filter(c => c.title === 'Contribuição Voluntária')
      .reduce((acc, c) => acc + Number(c.value), 0);

    this.chartData = {
      labels: ['Contribuição Mensal', 'Contribuição Voluntária'],
      datasets: [
        {
          data: [mensal, voluntaria],
          backgroundColor: ['#E62E6B', '#5B4CC4'],
          borderWidth: 0
        }
      ]
    };

    this.updateTotal();
  }


  updateTotal() {
    console.log(this.total)
    this.total = this.contributions.reduce((acc, c) => acc + Number(c.value), 0);
  }

  get valorMensal(): number {
  return this.contributions
    .filter(c => c.title === 'Contribuição Mensal')
    .reduce((acc, c) => acc + Number(c.value), 0);
}

  get valorVoluntaria(): number {
    return this.contributions
      .filter(c => c.title === 'Contribuição Voluntária')
      .reduce((acc, c) => acc + Number(c.value), 0);
  }


}
