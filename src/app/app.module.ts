import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { RegisterationConfirmationComponent } from './registeration-confirmation/registeration-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { ListofUsersComponent } from './listofusers/listofusers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgForm} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserregistrationformComponent,
    ListofdocumentsComponent,
    RegisterationConfirmationComponent,
    ListofUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule//,
    //NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
