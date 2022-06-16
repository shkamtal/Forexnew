import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
import { ExchangeCurrancyComponent } from './exchange-currancy/exchange-currancy.component';

import { FeaturesComponent } from './features/features.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { ReceipientComponent } from './receipient/receipient.component';
import { Receipient1Component } from './receipient1/receipient1.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import {BankDetailsComponent} from './bank-details/bank-details.component';

import {AboutCompanyComponent} from './about-company/about-company.component';
import {OurTeamComponent} from './our-team/our-team.component';

import {Home1Component} from './home1/home1.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/services', pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'home1',component:Home1Component
  },
  {
    path:'features',component:FeaturesComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
     path:'money-transfer',component:MoneyTransferComponent
  },
  {
    path:'exchange-currancy',component:ExchangeCurrancyComponent
  },

  {
    path:'contact',component:UserComponent
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AuthGuard]
  },
  {
    path:'signIn',component:SignUpComponent
  },
  {
    path:'adminRegister',component:AdminRegisterComponent
  },
  {
    path:'user',component:UserComponent,
  },

  {
    path:'account',component:BankDetailsComponent,
  },
  {
    path:'receipient',component:ReceipientComponent,
  },
  {
    path:'aboutCompany',component:AboutCompanyComponent,
  },
  {
    path:'ourTeam',component:OurTeamComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
