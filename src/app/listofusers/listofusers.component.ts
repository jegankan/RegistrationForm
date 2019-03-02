import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofUsersComponent implements OnInit {
  user: any;
  displayedColumns = ['FirstName', 'LastName', 'Email','SSO ID'];
  dataSource = new UserregDataSource(this.api);
  constructor(private api: ApiService) { }
 
  ngOnInit() {
    
    this.api.getRegistrationuserforms()
      .subscribe(res => {
        console.log(res);
        this.user = res;
      }, err => {
        console.log(err);
      });
  }
}
  export class UserregDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getRegistrationuserforms();
  }

  disconnect() {

  }
}


