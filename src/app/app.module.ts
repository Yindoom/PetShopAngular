import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowpetsComponent } from './pets/showpets/showpets.component';
import { PetdetailsComponent } from './pets/petdetails/petdetails.component';
import { PetaddComponent } from './pets/petadd/petadd.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PetupdateComponent } from './pets/petupdate/petupdate.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnerdetailComponent } from './owners/ownerdetail/ownerdetail.component';
import {ButtonsModule} from 'ngx-bootstrap';
import { LoginComponent } from './shared/login/login.component';
import { ShowOwnersComponent } from './owners/show-owners/show-owners.component';
import { UpdateOwnerComponent } from './owners/update-owner/update-owner.component';
import { AddOwnerComponent } from './owners/add-owner/add-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ShowpetsComponent,
    PetdetailsComponent,
    PetaddComponent,
    PetupdateComponent,
    OwnerdetailComponent,
    LoginComponent,
    ShowOwnersComponent,
    UpdateOwnerComponent,
    AddOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
