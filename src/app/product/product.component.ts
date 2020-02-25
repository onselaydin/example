import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  title="Ürünler";
  noproduct="Yok";
  name="Sepete Ekle";
  filterText="";
  products:Product[];

  constructor(
    private alerifyService:AlertifyService,
    private productService:ProductService
    ) { //Burada servisimizi inject ediyoruz

  }
  ngOnInit(): void {
      // this.http.get<Product[]>("http://localhost:3000/products").subscribe(x=> {
      //   this.products = x;
      // });
      this.productService.getProducts().subscribe(x=>{
        this.products = x;
      });
  }

  addToCart(prod){
    //alert(prod.name + " Sepete Eklendi.");
    //alertify.success("added");
    this.alerifyService.success(prod.name + " Sepete Eklendi.");
  }

}
