import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListofdocumentsComponent} from './listofdocuments/listofdocuments.component';
import {UserregistrationformComponent} from './userregistrationform/userregistrationform.component';

const routes: Routes = [
  { path: 'Userreg', component: UserregistrationformComponent },
  { path: 'listofdoc', component:ListofdocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
