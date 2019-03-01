import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { ListofUsersComponent } from './listofusers/listofusers.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterationConfirmationComponent } from './registeration-confirmation/registeration-confirmation.component';


const routes: Routes = [
  { 
    path: '', redirectTo: '/listofuser', pathMatch: 'full'
  },

  {
     path: 'listofuser', component:ListofUsersComponent ,
    data: { title: 'Users List' }
  },
  { 
    path: 'Userreg', component: UserregistrationformComponent,
  data: { title: 'User Register' } 
},
  { 
    path: 'regconf', component:RegisterationConfirmationComponent ,
    data: { title: 'Confirmation' }
   },
  { path: 'listofdoc', component:ListofdocumentsComponent ,
  data: { title: 'Doc List' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
