import {AfterViewInit, Directive, ElementRef, HostBinding, Inject, Input, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from '@angular/common'

@Directive({
  selector: 'img[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null
  @Input() src: string
  @Input() defaultImg: string

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    this.canLazyLoad()
      ? this.lazyLoadImage()
      // setTimeout() because in SSR arrive err. ExpressionChangedAfterItHasBeenCheckedError
      : setTimeout(() => this.loadImage(), 1)
  }

  private canLazyLoad(): boolean {
    return isPlatformBrowser(this.platformId)
      ? window && 'IntersectionObserver' in window
      : false
  }

  private lazyLoadImage(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({isIntersecting}) => {
        isIntersecting ? (
          this.loadImage(),
          obs.unobserve(this.el.nativeElement)
        ) : this.loadPlaceHolder()
      })
    })
    obs.observe(this.el.nativeElement)
  }

  private loadImage(): void {
    this.srcAttr = this.src
  }

  private loadPlaceHolder(): void {
    this.srcAttr = this.defaultImg
  }
}
