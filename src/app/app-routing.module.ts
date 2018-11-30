import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {ShowpetsComponent} from './pets/showpets/showpets.component';
import {PetdetailsComponent} from './pets/petdetails/petdetails.component';
import {PetaddComponent} from './pets/petadd/petadd.component';
import {PetupdateComponent} from './pets/petupdate/petupdate.component';
import {OwnerdetailComponent} from './owners/ownerdetail/ownerdetail.component';
import {LoginComponent} from './shared/login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {ShowOwnersComponent} from './owners/show-owners/show-owners.component';
import {UpdateOwnerComponent} from './owners/update-owner/update-owner.component';
import {AddOwnerComponent} from './owners/add-owner/add-owner.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pets', component: ShowpetsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'petdetails/:id', component: PetdetailsComponent, canActivate: [AuthGuard]},
  { path: 'petadd', component: PetaddComponent, canActivate: [AuthGuard]},
  { path: 'petupdate/:id', component: PetupdateComponent, canActivate: [AuthGuard]},
  { path: 'owners', component: ShowOwnersComponent},
  { path: 'ownerdetail/:id', component: OwnerdetailComponent, canActivate: [AuthGuard]},
  { path: 'ownerupdate/:id', component: UpdateOwnerComponent, canActivate: [AuthGuard]},
  { path: 'addowner', component: AddOwnerComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
