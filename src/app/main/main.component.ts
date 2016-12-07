import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service.ts";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    data: any;
    constructor(private _apiService: APIService) {
        //this._apiService.user$.subscribe(
        //    user => this.data = user
        //);
    }

    ngOnInit() {

        this._apiService.user$.subscribe(
            user => this.data = user,
            e => console.log('error:', e)/*,
            () => console.log('complete')*/
        );
    }

}
