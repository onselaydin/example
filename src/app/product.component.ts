import { Component} from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {

  //posts isimli bir değişken tanımladık.
posts: [any];
private url = 'https://jsonplaceholder.typicode.com/posts'
private apiUrl = 'http://localhost:55155/api/login/LoginControl';
constructor(private http:HttpClient) {
  http.get('https://jsonplaceholder.typicode.com/posts')
  //http.get('https://api.themoviedb.org/3/movie/popular?api_key=81a4ae3c015507ef8ffb7b7091b46ee9&language=en-US&page=1')
  .subscribe(response=> {
    //console.log(response);
    this.posts = <[any]>response;
  })
}
//dom tarafından veri almanın diğer bir yoludur. Normalde input.value şeklinde alırdık.
createPost(input: HTMLInputElement) {
  const post = {title: input.value};
  input.value='';
  //splice : dizinin başına bir eleman ekler.
  this.http.post(this.url,JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
      console.log(response);
    })

}

test(){
  console.log('test');
  let username = "onsel";
  let password = "1234";
  const user = {
    usr: 'onsel',
    pass: '1234'
  }
  this.http.post(this.apiUrl, JSON.stringify({ usr: username, pass: password }))
      .subscribe(response => {
        console.log(response);
      })
}

title:string = 'Alışan Lojistik Pipe örneği';
text = 'Ali veli kırkdokuz elli. Bu angular güzelmiş. çalışmaya devam...';


  model: ProductRepository = new ProductRepository();

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
  }
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

  //email inputun valuesuna aktarılıyor....
  email = "onselaydin@gmail.com"
  onKeyUp2() {
  
      console.log(this.email);

  }

}
