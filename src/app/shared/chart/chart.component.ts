import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexDataLabels, ApexYAxis, ApexGrid, ApexTooltip } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() chartTitle: string = "Chart";
  @Input() chartType: "line" | "area" | "bar" = "line"; 
  @Input() series: ApexAxisChartSeries = []; 
  @Input() categories: string[] = []; 

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
