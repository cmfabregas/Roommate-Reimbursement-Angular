import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import {HttpClientModule} from '@angular/common/http'
import { GroupService } from './groups/group.service';
import { CreateGroupComponent } from './create-group/create-group.component';
import {CreateGroupService } from './create-group/create-group.service';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGroupMembersComponent } from './add-group-members/add-group-members.component';
import { RequestPaymentComponent } from './request-payment/request-payment.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { ReimbursementDashboardComponent } from './reimbursement-dashboard/reimbursement-dashboard.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { Reimbursement } from './reimbursement/reimbursement';


// const routes: Routes = [
//   {path: 'reimbursement/:id', component:ReimbursementComponent},
//   // {path: 'creategroups',component:CreateGroupComponent},




const routes: Routes = [
  {path: 'resetpassword?id=/:id', component: ResetPasswordComponent},
  {path: 'app.component', component: AppComponent},                  
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upload/:reimbursementId', component: PictureUploadComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  {path: 'home', component: HomeComponent, children: [
    {path:'creategroups', component:CreateGroupComponent},
    {path:'groups', component:GroupsComponent},
    {path: 'addgroupmembers', component:AddGroupMembersComponent},
    {path: 'CreateReimbursement', component: ReimbursementComponent},
    {path: 'reimbursement/:groupId', component: ReimbursementDashboardComponent, children: [{path :'create', component:ReimbursementComponent}]},
  ]}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GroupsComponent,
    CreateGroupComponent,
    RequestPaymentComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ReimbursementComponent,
    DashboardComponent,
    AddGroupMembersComponent,
    PictureUploadComponent,
    ReimbursementDashboardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GroupService, CreateGroupService],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule {}

