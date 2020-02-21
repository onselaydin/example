import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title="Ürünler";
  noproduct="Yok";
  name="test";
  products:any[]=[
    { id:1, name:"Samsun S5", price:1000, imageUrl:"1.jpg", categoryid:1, description:"idare eder."},
    { id:1, name:"Lenovo", price:3000, imageUrl:"1.jpg", categoryid:2, description:"lenovo dokanmatik"},
    { id:1, name:"Samsun S7", price:1000, imageUrl:"1.jpg", categoryid:1, description:"idare eder."},
];

  constructor() { 

  }
  ngOnInit(): void {

  }

}
