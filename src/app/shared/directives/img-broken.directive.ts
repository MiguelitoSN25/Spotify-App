import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input()customImg:string=''
@HostListener('error') handleError():void{
  const ElNative = this.elHost.nativeElement
  console.log('Esta imagen revento', this.elHost);
  ElNative.src = '../../../assets/images/imgbroken.png'
}
  constructor(private elHost: ElementRef) 
  {
    console.log(this.elHost);
   }

}
