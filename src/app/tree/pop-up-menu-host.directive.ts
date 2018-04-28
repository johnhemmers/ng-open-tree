import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPopUpMenuHost]'
})
export class PopUpMenuHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
