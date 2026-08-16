import {
  Directive,
  ElementRef,
  HostListener,
  input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  color = input('yellow', {
    alias: 'appHighlight'
  });

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}