import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddForm1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //bu uygulama bu component ile başlar demektir.
})
export class AppModule { }
