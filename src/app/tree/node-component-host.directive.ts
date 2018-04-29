import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNodeComponentHost]'
})
export class NodeComponentHostDirective {
  constructor(public nodeComponentContainer: ViewContainerRef) { }
}
