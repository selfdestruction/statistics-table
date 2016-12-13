import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { APIService } from "../../services/api.service";

@Component({
  selector: 'app-user-manager',
  animations: [routerTransition()],
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  rolesUrl: string;
  usersUrl: string;

  users;
  roles;

  constructor(private  _apiService: APIService) {

    this.rolesUrl = '/admin/role';
    this.usersUrl = '/admin/user';

    this._apiService.fetch(this.rolesUrl).subscribe(
        result => {
          this.roles = result;
          console.log(result);
        }
    );
    this._apiService.fetch(this.usersUrl).subscribe(
        result => {
          this.users = result;
          //console.log(result);
        }
    );
  }

  onChange(event){
      console.log('event:', event);
  }

  ngOnInit() {

  }
}
