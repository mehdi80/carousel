import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  avalableColors = ['#6F256F', '#947B94', '#814B81', '#5C085C', '#490049',
    '#2D882D', '#97B697', '#5C9F5C', ' #0A710A', '#005A00',
    '#FF0000', '#DA0C0C', '#494242', '#AA3939', '#7A4B4B'];

  @HostBinding('style.color') color: string | undefined;
  @HostBinding('style.border-color') borderColor: string | undefined;
  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.avalableColors.length);
    this.color = this.borderColor = this.avalableColors[randomColorIndex];

  }

}
