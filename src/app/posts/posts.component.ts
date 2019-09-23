import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http: HttpClient) { 
    
    //http isteği ne zaman geleceği belli olmadığı için
    //subscribe asenkron metodunu kullanıyorum.
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response=> {
        console.log(response);
      })

  }

  

  ngOnInit() {
  }

}
