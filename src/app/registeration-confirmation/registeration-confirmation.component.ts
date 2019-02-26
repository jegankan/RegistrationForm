import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registeration-confirmation',
  templateUrl: './registeration-confirmation.component.html',
  styleUrls: ['./registeration-confirmation.component.css']
})
export class RegisterationConfirmationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
