import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service.ts";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  constructor(private _apiService: APIService) {}

  ngOnInit() {

    this._apiService.user$.subscribe(
        user => this.user = user
    );
  }

}
