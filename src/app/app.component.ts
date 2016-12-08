import { Component } from '@angular/core';
import { HighchartsService } from "./services/highcharts.service.ts";
import { APIService } from "./services/api.service.ts";
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(){

    }
}
