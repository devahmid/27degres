import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var Plotly: any;

@Component({
  selector: 'app-admin-interface',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.css'
})
export class AdminInterfaceComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    try {
      const data = [{
        type: 'pie',
        labels: ['Payées', 'En attente', 'En retard'],
        values: [22, 3, 2],
        marker: {
          colors: ['#7FB03E', '#F5A623', '#E84C24']
        },
        textinfo: 'label+percent',
        textposition: 'outside',
        hovertemplate: '<b>%{label}</b><br>%{value} membres<br>%{percent}<extra></extra>'
      }];

      const layout = {
        showlegend: false,
        margin: { t: 20, r: 20, b: 20, l: 20 },
        plot_bgcolor: '#FFFFFF',
        paper_bgcolor: '#FFFFFF',
        font: { family: 'Open Sans', size: 12 }
      };

      const config = {
        responsive: true,
        displayModeBar: false,
        displaylogo: false
      };

      if (typeof Plotly !== 'undefined') {
        Plotly.newPlot('cotisations-chart', data, layout, config);
      }
    } catch(e) {
      const chartElement = document.getElementById('cotisations-chart');
      if (chartElement) {
        chartElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">Graphique indisponible</div>';
      }
    }
  }
}

