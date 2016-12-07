import { Component, OnInit, Input } from '@angular/core';
import { HighchartsService } from "../services/highcharts.service.ts";
import { APIService } from "../services/api.service.ts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() identificator: string;
  @Input() chartData: any;
  data;
  constructor(private _HighchartsService:HighchartsService,
              private _apiService:APIService){
    console.log('constructor:',this.chartData);

  }
  ngAfterViewInit() {

    //console.log('ngAfterViewInit:',this.data);
    this._apiService.fetch(this.chartData.methods.getAllChardData).subscribe(
        result => {

        this._HighchartsService.Highcharts.StockChart(this.identificator, {

          chart: {
            //events: {
            //    load: function () {
            //        this.setTitle(null, {
            //            text: 'Built chart in ' + (this.end - this.start) + 'ms'
            //        });
            //    }
            //},
            zoomType: 'x'
          },
          rangeSelector: {

            buttons: [{
              type: 'day',
              count: 3,
              text: '3d'
            }, {
              type: 'week',
              count: 1,
              text: '1w'
            }, {
              type: 'month',
              count: 1,
              text: '1m'
            }, {
              type: 'month',
              count: 6,
              text: '6m'
            }, {
              type: 'year',
              count: 1,
              text: '1y'
            }, {
              type: 'all',
              text: 'All'
            }],
            selected: 3
          },

          yAxis: {
            title: {
              text: this.chartData['title-y']
            }
          },

          title: {
            text: this.chartData['title']
          },

          subtitle: {
              text: this.chartData['short-title']
          },
          series: [{
            name: this.chartData['title-y'],
            data: result,
            type: 'area',
            threshold: null,
            tooltip: {
              valueDecimals: 2
            },
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, this._HighchartsService.Highcharts.getOptions().colors[0]],
                [1, this._HighchartsService.Highcharts.Color(this._HighchartsService.Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            }
          }]
        });
      }
    );
  }
  ngOnInit(){
    console.log('init:', this.chartData.methods.getAllChardData);
    this._apiService.fetch(this.chartData.methods.getAllChardData).subscribe(
        result => {this.data = result; console.log('result:',result);}
    );
  }
}
