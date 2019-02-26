import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
 import { Router } from '@angular/router';

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
    let userlist={"First name":userregForm.inputfirstname,"Last name":userregForm.inputlastname, "SSO ID":userregForm.inputssoid,"Email":userregForm.inputemail};
    this.http.post('http://localhost:3000/employee',userlist).subscribe(status=> console.log(JSON.stringify(status))
    );
  }
 }
// @Injectable()
// export class UserregistrationformComponent implements OnInit {

//   constructor(private injector: Injector,private http: HttpClient) { }

//   handleError(error: any): void {
//     const routerService = this.injector.get(Router);
//     const ngZone = this.injector.get(NgZone);
//     ngZone.run(() => {
//       routerService.navigate(['/Userreg'], { skipLocationChange: true });
//     });
//   }
//   ngOnInit() {
//        }
//   onSubmit(userregForm){
//     console.log(JSON.stringify(userregForm));
//     let userlist={"First name":userregForm.inputfirstname,"Last name":userregForm.inputlastname, "SSO ID":userregForm.inputssoid,"Email":userregForm.inputemail};
//     this.http.post('http://localhost:3000/employee',userlist).subscribe(status=> console.log(JSON.stringify(status))
//     );
//   }
// }
