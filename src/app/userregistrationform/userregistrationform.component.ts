import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userregistrationform',
  templateUrl: './userregistrationform.component.html',
  styleUrls: ['./userregistrationform.component.css']
})
export class UserregistrationformComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(userregForm){
    console.log(JSON.stringify(userregForm));
    let userlist={Name:userregForm.Name,Age:userregForm.Age, Email:userregForm.Email};
    this.http.post('http://localhost:3000/employee',userlist).subscribe(status=> console.log(JSON.stringify(status))
    );
  }
}
