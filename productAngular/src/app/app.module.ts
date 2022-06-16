import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import {AuthGuard} from './guards/auth.guard';
import {ServicesService} from './services.service';
import {TokenInterceptorService} from './token-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { ExchangeCurrancyComponent } from './exchange-currancy/exchange-currancy.component';
import { ReceipientComponent } from './receipient/receipient.component';
import { AccountComponent } from './account/account.component';
import { Receipient1Component } from './receipient1/receipient1.component';
import { GlobalVariableComponent } from './global-variable/global-variable.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { Home1Component } from './home1/home1.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    AdminComponent,
    SignUpComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserComponent,
    MoneyTransferComponent,
    ExchangeCurrancyComponent,
    ReceipientComponent,
    AccountComponent,
    Receipient1Component,
    GlobalVariableComponent,
    AboutCompanyComponent,
    OurTeamComponent,
    BankDetailsComponent,
    AdminloginpageComponent,
    Home1Component,
  
],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
   ToastrModule.forRoot(),
  ],

  providers: [ AuthGuard,ServicesService,AdminComponent,
  {
   provide:HTTP_INTERCEPTORS,
   useClass:TokenInterceptorService,
   multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
