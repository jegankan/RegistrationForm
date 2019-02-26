import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofUsersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
