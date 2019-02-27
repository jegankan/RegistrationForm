import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { ListofUsersComponent } from './listofusers/listofusers.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { RegisterationConfirmationComponent } from './registeration-confirmation/registeration-confirmation.component';


const routes: Routes = [
  { path: '', redirectTo: '/listofuser', pathMatch: 'full' },
  { path: 'listofuser', component:ListofUsersComponent },
  { path: 'Userreg', component: UserregistrationformComponent },
  { path: 'regconf', component:RegisterationConfirmationComponent },
  { path: 'listofdoc', component:ListofdocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
