import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { FormControl, NgForm } from '@angular/forms';

// import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistrationform',
  templateUrl: './userregistrationform.component.html',
  styleUrls: ['./userregistrationform.component.css']
})
export class UserregistrationformComponent implements OnInit {

  constructor(private api: ApiService,private router: Router) { }
   ngOnInit() {
    
  }


  onClickSubmit(userregForm){

    console.log(JSON.stringify(userregForm));
      let userlist={"FirstName":userregForm.firstname,"LastName":userregForm.lastname, "SSOID":userregForm.ssoid,"Email":userregForm.email};
    
      this.api.postRegistrationuserform(userlist).subscribe(status=> console.log(JSON.stringify(status))
      );
      this.router.navigate(['/regconf']);
  };
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
