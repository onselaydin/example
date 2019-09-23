import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {
  constructor(private element:ElementRef) { }

  @HostListener('focus') onFocus(){
    //console.log('focused');
    this.element.nativeElement.classList.add('bg-warning')
  }
  @HostListener('blur') onBlur(){
    //console.log('blured');
    this.element.nativeElement.classList.remove('bg-warning')
  }

}
