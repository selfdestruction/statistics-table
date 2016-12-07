import * as highcharts from 'highcharts/highstock';
import { Injectable } from '@angular/core';
//import { Highcharts } from './HighchartsWrapper';

@Injectable()
export class HighchartsService {
  Highcharts : any;

  constructor() {
    this.Highcharts = highcharts;
  }
}
