import { Component} from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();
  //product: Product = this.model.getProductsById(1);
  //product2: Product = this.model.getProductsById(5);
  disabled=false;
  getClasses(id:number): string {
    let product = this.model.getProductById(id);
    return (product.price >= 1000 ? "bg-info" : "bg-secondary"+ " m-2 p-2 text-white")
  }

  getClassMap(id: number): Object{
    let product = this.model.getProductById(id);
    return {
      "bg-info": product.price <= 1000,
      "bg-secondary": product.price > 1000,
      "text-center text-white": product.name == "Samsung Note 10"
    }
  }

  color: string ="red";
  fontSize: string = "25px";
  color2: string = this.model.getProductById(4).price <= 1000?"green":"red";

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontSize: "35px",
      color: product.price <= 1000 ? "green": "red"
    }
  }

  onSubmit($event) {
    console.log($event);
  }

  onKeyUp($event) {
    if($event.keyCode === 13){
      console.log("enter çalıştı " + $event.target.value);
    }
  }

}
