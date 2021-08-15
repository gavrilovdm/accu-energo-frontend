import { Component, Renderer2, OnInit, OnDestroy } from "@angular/core";

@Component({
  template: '',
  selector: 'app-scroll-lock'
})
export class ScrollLockComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'modal-open')
  }
}
