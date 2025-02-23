import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexYAxis, ApexGrid, ApexTooltip } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() chartTitle: string = "Chart"; // Title input
  @Input() chartType: "line" | "area" | "bar" = "line"; // Chart type input
  @Input() series: ApexAxisChartSeries = []; // Data input
  @Input() categories: string[] = []; // X-axis categories input

  chartOptions: any = {
    type: this.chartType,
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: this.categories
  };

  stroke: ApexStroke = {
    curve: "smooth"
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  yaxis: ApexYAxis = {
    labels: { formatter: (val) => `$${val}` }
  };

  grid: ApexGrid = {
    strokeDashArray: 5
  };

  tooltip: ApexTooltip = {
    theme: "dark"
  };

}
