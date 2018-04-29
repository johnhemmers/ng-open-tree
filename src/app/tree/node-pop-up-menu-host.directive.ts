import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNodePopUpMenuHost]'
})
export class NodePopUpMenuHostDirective {
  constructor(public nodePopUpMenuContainer: ViewContainerRef) { }
}
