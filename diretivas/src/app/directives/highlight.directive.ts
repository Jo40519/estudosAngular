import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @HostListener('mouseenter') onMouseOver() {
    // this.render.setStyle(this.elementref.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.render.setStyle(this.elementref.nativeElement, 'background-color', 'white')
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined

  @Input() defaultColor: string = 'white'
  @Input() highlightColor: string = 'yellow'
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }


}
