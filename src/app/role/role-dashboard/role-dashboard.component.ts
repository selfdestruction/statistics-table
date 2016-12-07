import { Component, OnInit } from '@angular/core';
import { APIService } from "../../services/api.service";

@Component({
  selector: 'app-role-dashboard',
  templateUrl: './role-dashboard.component.html',
  styleUrls: ['./role-dashboard.component.scss']
})
export class RoleDashboardComponent implements OnInit {

  user: any;
  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this._apiService.user$.subscribe(user => this.user = user);
  }

}
