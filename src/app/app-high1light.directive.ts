import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHigh1light]'
})
export class AppHigh1lightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() highLightColor: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgrondColor(this.highLightColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgrondColor('transparent');

  }

  private changeBackgrondColor(color: string) {
    //this.elementRef.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
