import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'products', component : ProductComponent},
  {path: 'test', component : TestComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
