import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listofdocuments',
  templateUrl: './listofdocuments.component.html',
  styleUrls: ['./listofdocuments.component.css']
})
export class ListofdocumentsComponent implements OnInit {

  constructor (private http: HttpClient) { }

  ngOnInit() {
  }

}
