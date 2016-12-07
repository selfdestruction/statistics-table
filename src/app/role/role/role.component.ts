import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { APIService } from "../../services/api.service";

@Component({
  selector: 'app-role',
  animations: [
      trigger('roleContainer', [
        state('void', style({
          'transform': 'translateX(-100%)',
          //'background-color': 'black'
        })),
        state('default', style({
          //'background-color': 'green'
        })),
        transition('void => *', animate(500)),
        transition('* => *', animate(500))
      ]),
      trigger('roleBody', [
        state('void', style({
          'transform': 'translateY(-100%)'
          //'background-color': 'black'
        })),
          state('hidden', style({
            'display':'none'
          })),
          state('show', style({
            'display':'block'
            //'background-color': 'green'
          })),
          transition('void => *', animate(500)),
          transition('* => void', animate(500)),
      ])
  ],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @Input() role:any;
  showBody: boolean = false;
  roleContainer: string = 'default';
  roleBody: string = 'default';
  charts;
  constructor(private _apiService: APIService) { }

  onHeaderClick(url){
    this.showBody = !this.showBody;

    this._apiService.fetch(url).subscribe(
        result => this.charts = result
    );
    //console.log(this.charts);

  }

  ngOnInit() {
  }

}
