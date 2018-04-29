import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNodeHeaderHost]'
})
export class NodeHeaderHostDirective {
  constructor(public nodeHeaderContainer: ViewContainerRef) { }
}
