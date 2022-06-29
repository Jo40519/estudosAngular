import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgElse]'
})
  
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
}

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }



}
