import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";

@Component({
  selector: 'app-user-manager',
  animations: [routerTransition()],
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
