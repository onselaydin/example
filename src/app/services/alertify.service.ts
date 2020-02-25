import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'; 

@Injectable({
  providedIn: 'root' //Bu root ifadesi bunun global bir servis olduğunu ifade eder.
})
export class AlertifyService {

  constructor() { }
  success(message:string){
    alertify.success(message);
  }

}
