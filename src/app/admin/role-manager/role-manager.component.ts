import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-role-manager',
  animations: [routerTransition()],
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss']
})
export class RoleManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
