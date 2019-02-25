import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { ListofdocumentsComponent } from './listofdocuments/listofdocuments.component';
import { RegisterationConfirmationComponent } from './registeration-confirmation/registeration-confirmation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserregistrationformComponent,
    ListofdocumentsComponent,
    RegisterationConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
