import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title="Ürünler";
  noproduct="Yok";
  name="Sepete Ekle";
  filterText="";
  products:Product[]=[  //product yerinde any vardı. product.ts modelini ekleyerek alanların tip güvenliği sağladık.
    { id:1, name:"Dell ES570", price:4500, imageUrl:"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", categoryId:1, description:"idare eder."},
    { id:2, name:"Lenovo", price:8000, imageUrl:"https://images.unsplash.com/photo-1527434082571-c71226af7333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", categoryId:2, description:"lenovo dokanmatik"},
    { id:3, name:"Apple", price:10000, imageUrl:"https://images.unsplash.com/photo-1516163173352-d1c4d006f9ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", categoryId:1, description:"idare eder."},
    { id:4, name:"Asus", price:5000, imageUrl:"https://images.unsplash.com/photo-1477327070293-75f15e291bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", categoryId:1, description:"asus"},
    { id:5, name:"Ibm", price:6000, imageUrl:"https://images.unsplash.com/photo-1543269665-bd1bc9e6f296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", categoryId:1, description:"Ibm "},
    { id:6, name:"Hp", price:3500, imageUrl:"https://images.unsplash.com/photo-1543269665-bd1bc9e6f296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", categoryId:1, description:"Hp"},
];

  constructor() { 

  }
  ngOnInit(): void {

  }

  addToCart(prod){
    alert(prod.name + " Sepete Eklendi.");
  }

}
