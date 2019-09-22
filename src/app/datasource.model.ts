import { Product } from "./product.model";

export class SimpleDataSource {
    private products: Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1,"Samsung Note 2","16 gb dahili hafıza","1.jpg",1100),
            new Product(2,"Samsung Note 5","32 gb dahili hafıza","2.jpg",1000),
            new Product(3,"Samsung Note 9","64 gb dahili hafıza","3.jpg",1000),
            new Product(4,"Samsung Note 10","128 gb dahili hafıza","4.jpg",1000),
            new Product(5,"Samsung Note 10+","256 gb dahili hafıza","5.jpg",900)
        )
    }
    getProducts(): Product[] {
        return this.products;
    }
}