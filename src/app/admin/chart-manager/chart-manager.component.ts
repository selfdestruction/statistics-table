import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";

@Component({
  selector: 'app-chart-manager',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.scss']
})
export class ChartManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
