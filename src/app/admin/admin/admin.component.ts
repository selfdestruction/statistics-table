import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-admin',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
