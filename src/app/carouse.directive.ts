import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './interfaces/app-inretface';

@Directive({
  selector: '[appCarouse]'
})
export class CarouseDirective implements OnInit {

  context!: ICarouselContext;
  index: number = 0;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
    private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouseFrom')
  images: string[] = [];

  timer: any;

  @Input() test: any;

  @Input('appCarouseAutoplay')
  set autoplay(val: string) {
    val === 'No' ? this.clearAutoPlay() : this.playAutoPlay()
  }

  public ngOnInit(): void {

    console.log(this.test)
    this.context = {

      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
  public next() {
    this.index++

    if (this.index >= this.images.length) {
      this.index = 0;
    }

    this.context.$implicit = this.images[this.index];
  }

  public prev() {
    this.index--

    if (this.index < 0) {
      this.index = this.images.length - 1
    }

    this.context.$implicit = this.images[this.index];
  }

  public playAutoPlay() {
    this.timer = setInterval(() => {
      this.next
    }, 1000)
  }

  public clearAutoPlay() {
    clearInterval(this.timer)
  }
}
