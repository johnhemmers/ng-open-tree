import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SkipSelf,
  ViewChild
} from "@angular/core";
import {TreeNode} from "./tree-node";
import {ComponentMappingService} from "../mapping-service/component-mapping.service";
import {NodeComponentHostDirective} from "./node-component-host.directive";
import {NodePopUpMenuHostDirective} from "./node-pop-up-menu-host.directive";
import {PopUpMenuMappingService} from "../mapping-service/pop-up-menu-mapping.service";
import {HeaderMappingService} from "../mapping-service/header-mapping.service";
import {NodeHeaderHostDirective} from "./node-header-host.directive";
import {TreeNodeComponent} from "./tree-node-component";
import {TreeInterface} from "./tree-interface";
import {nodeId} from './tree-utils';

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"],
  providers: [
    { provide: TreeInterface, useExisting: forwardRef(() => TreeComponent) }
  ]
})
export class TreeComponent implements OnInit, OnDestroy, TreeInterface {
  @Input() model: TreeNode;
  @ViewChild(NodeHeaderHostDirective) headerHost: NodeHeaderHostDirective;
  @ViewChild(NodePopUpMenuHostDirective)
  popUpMenuHost: NodePopUpMenuHostDirective;
  @ViewChild(NodeComponentHostDirective)
  componentHost: NodeComponentHostDirective;

  private popUpMenuRef: ComponentRef<any>;

  private globalListeners: Function[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private headerMappingService: HeaderMappingService,
    private popUpMenuMappingService: PopUpMenuMappingService,
    private componentMappingService: ComponentMappingService,
    @SkipSelf()
    @Optional()
    private parentTree: TreeInterface
  ) {}

  ngOnInit() {
    this.loadHeader();
    this.loadComponent();
    this.setListeners();
  }

  ngOnDestroy() {
    this.globalListeners.forEach((f: Function) => f());
  }

  loadHeader() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.headerMappingService.getType(this.model.dataNode.header)
    );

    this.headerHost.nodeHeaderContainer.clear();
    const componentRef = this.headerHost.nodeHeaderContainer.createComponent(
      componentFactory
    );
    (<TreeNodeComponent>componentRef.instance).data = this.model.dataNode.headerData;
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.componentMappingService.getType(this.model.dataNode.component)
    );

    this.componentHost.nodeComponentContainer.clear();
    const componentRef = this.componentHost.nodeComponentContainer.createComponent(
      componentFactory
    );
    (<TreeNodeComponent>componentRef.instance).data = this.model.dataNode.componentData;
    (<TreeNodeComponent>componentRef.instance).formValueChanges$().subscribe((value: any) => {
      this.model.dataNode.componentData = value;
    })
  }

  setListeners() {
    this.globalListeners.push(
      this.renderer.listen("document", "mousedown", this.closeMenu.bind(this))
    );
    this.globalListeners.push(
      this.renderer.listen("document", "keyup", this.closeMenu.bind(this))
    );
  }

  loadPopUpMenu() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.popUpMenuMappingService.getType(this.model.dataNode.popUpMenu)
    );

    this.popUpMenuHost.nodePopUpMenuContainer.clear();
    this.popUpMenuRef = this.popUpMenuHost.nodePopUpMenuContainer.createComponent(
      componentFactory
    );
  }

  closeMenu(e: MouseEvent | KeyboardEvent) {
    if (this.popUpMenuRef) {
      const containingTarget = this.popUpMenuRef.location.nativeElement.contains(
        e.target
      );

      if (!containingTarget) {
        setTimeout(() => this.popUpMenuRef.destroy(), 0);
      }
    }
  }

  onHeaderRightClick(e: MouseEvent) {
    this.loadPopUpMenu();
    e.preventDefault();
    e.stopPropagation();
  }

  onCollapseElementClick(e: MouseEvent) {
    this.model.dataNode.expanded = !this.model.dataNode.expanded;
  }

  deleteNode(): void {
    if(this.parentTree) {
      this.parentTree.deleteChildNode(this.model);
    }
  }

  deleteChildNode(treeNode: TreeNode): void {
    this.model.childNodes = this.model.childNodes.filter((childNode: TreeNode) => childNode.id !== treeNode.id);
  }

  addNode(treeNode: TreeNode): void {
    this.popUpMenuRef.destroy();
    treeNode.id = nodeId(this.model.id, this.model.childNodes ? this.model.childNodes.length + 1 : 1);
    this.model.childNodes.push(treeNode);
    this.model.dataNode.expanded = true;
  }
}
