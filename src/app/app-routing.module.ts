import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { ListofUsersComponent } from './listofusers/listofusers.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { RegisterationConfirmationComponent } from './registeration-confirmation/registeration-confirmation.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/listofuser', pathMatch: 'full' },
  { path: 'listofuser', component:ListofUsersComponent },
  { path: 'listofuser/Userreg', component: UserregistrationformComponent },
  { path: 'listofuser/Userreg/regconf', component:RegisterationConfirmationComponent },
  { path: 'listofuser/Userreg/regconf/listofuser/Userreg/listofdoc', component:ListofdocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
