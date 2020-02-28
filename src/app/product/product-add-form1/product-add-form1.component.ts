import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.css'],
  providers: [CategoryService]
})
export class ProductAddForm1Component implements OnInit {

  constructor(private categoryService:CategoryService) { }
  model : Product = new Product();
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }

  add(form:NgForm){
    console.log(form.value.name);
  }

}
