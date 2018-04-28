import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from "@angular/core";
import {Tree} from "./tree";
import {ComponentMappingService} from "../component-mapping-service/component-mapping.service";
import {ComponentHostDirective} from "./component-host.directive";
import {PopUpMenuHostDirective} from './pop-up-menu-host.directive';
import {PopUpMenuMappingService} from '../pop-up-menu-mapping-service/pop-up-menu-mapping.service';

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"]
})
export class TreeComponent implements OnInit {
  @Input() model: Tree;
  @ViewChild(ComponentHostDirective) componentHost: ComponentHostDirective;
  @ViewChild(PopUpMenuHostDirective) popUpMenuHost: PopUpMenuHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentMappingService: ComponentMappingService,
    private popUpMenuMappingService: PopUpMenuMappingService,

  ) {}

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.componentMappingService.getType(this.model.node.component)
    );

    this.componentHost.viewContainerRef.clear();
    this.componentHost.viewContainerRef.createComponent(componentFactory).changeDetectorRef.detectChanges();
  }

  loadPopUpMenu() {
    const componentfactory = this.componentFactoryResolver.resolveComponentFactory(
      this.popUpMenuMappingService.getType(this.model.node.popUpMenu)
    );

    this.popUpMenuHost.viewContainerRef.clear();
    this.popUpMenuHost.viewContainerRef.createComponent(componentfactory).changeDetectorRef.detectChanges();
  }

  onLabelClick(e: MouseEvent){
    this.loadPopUpMenu();
  }

  onCollapseElementClick(e: MouseEvent){
    this.model.node.expanded = !this.model.node.expanded;
  }
}
