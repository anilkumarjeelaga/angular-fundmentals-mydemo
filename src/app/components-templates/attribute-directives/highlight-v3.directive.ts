import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightV3]'
})
export class HighlightV3Directive {

  constructor( private el:ElementRef) { }
  @Input('appHighlightV3') highlightColor : string;

  @HostListener('mouseenter')onmouseenter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave')onmouseleave() {
    this.highlight(null);
  }
  @HostBinding('class') testClass: string = 'some-test-class';

  private highlight(color: string){
   this.el.nativeElement.style.backgroundColor = color; 
  }

}


// @Input('appHighlightV3') highlightColor: string;

// @HostListener('mouseenter') onMouseEnter() {
//   this.highlight(this.highlightColor || 'red');
// }

// @HostListener('mouseleave') onMouseLeave() {
//   this.highlight(null);
// }

// @HostBinding('class') testClass: String = 'some-test-class';

// private highlight(color: string) {
//   this.el.nativeElement.style.backgroundColor = color;
// }