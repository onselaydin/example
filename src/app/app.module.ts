import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component'
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddForm1Component,
    ProductAddForm2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent] //bu uygulama bu component ile başlar demektir.
})
export class AppModule { }
