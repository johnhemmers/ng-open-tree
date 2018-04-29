import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from "@angular/core";
import {Tree} from "./tree";
import {ComponentMappingService} from "../mapping-service/component-mapping.service";
import {NodeComponentHostDirective} from "./node-component-host.directive";
import {NodePopUpMenuHostDirective} from './node-pop-up-menu-host.directive';
import {PopUpMenuMappingService} from '../mapping-service/pop-up-menu-mapping.service';
import {HeaderMappingService} from '../mapping-service/header-mapping.service';
import {NodeHeaderHostDirective} from './node-header-host.directive';
import {TreeNodeData} from './tree-node-data';

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"]
})
export class TreeComponent implements OnInit {
  @Input() model: Tree;
  @ViewChild(NodeHeaderHostDirective) headerHost: NodeHeaderHostDirective;
  @ViewChild(NodePopUpMenuHostDirective) popUpMenuHost: NodePopUpMenuHostDirective;
  @ViewChild(NodeComponentHostDirective) componentHost: NodeComponentHostDirective;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private headerMappingService: HeaderMappingService,
    private popUpMenuMappingService: PopUpMenuMappingService,
    private componentMappingService: ComponentMappingService,
  ) {}

  ngOnInit() {
    this.loadHeader();
    this.loadComponent();
  }

  loadHeader() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.headerMappingService.getType(this.model.node.header)
    );

    this.headerHost.nodeHeaderContainer.clear();
    const componentRef = this.headerHost.nodeHeaderContainer.createComponent(componentFactory);
    (<TreeNodeData>componentRef.instance).data = this.model.node.headerData;
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.componentMappingService.getType(this.model.node.component)
    );

    this.componentHost.nodeComponentContainer.clear();
    const componentRef = this.componentHost.nodeComponentContainer.createComponent(componentFactory);
    (<TreeNodeData>componentRef.instance).data = this.model.node.componentData;
  }

  loadPopUpMenu() {
    const componentfactory = this.componentFactoryResolver.resolveComponentFactory(
      this.popUpMenuMappingService.getType(this.model.node.popUpMenu)
    );

    this.popUpMenuHost.nodePopUpMenuContainer.clear();
    this.popUpMenuHost.nodePopUpMenuContainer.createComponent(componentfactory).changeDetectorRef.detectChanges();
  }

  onHeaderClick(e: MouseEvent){
    this.loadPopUpMenu();
  }

  onCollapseElementClick(e: MouseEvent){
    this.model.node.expanded = !this.model.node.expanded;
  }
}
