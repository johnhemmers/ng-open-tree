import {Component, forwardRef, Host, OnInit, Optional} from '@angular/core';
import {TreeInterface} from '../tree/tree-interface';
import {TreeNode} from '../tree/tree-node';

@Component({
  selector: 'app-menu',
  templateUrl: './pop-up-menu.component.html',
  styleUrls: ['./pop-up-menu.component.css']
})
export class PopUpMenuComponent implements OnInit {
  public menuItems: NodeMenuItem[] = [
    {
      name: 'Add Node',
      cssClass: 'add-node'
    },
    {
      name: 'Delete node',
      cssClass: 'delete-node'
    }
  ];

  constructor(@Host() private tree: TreeInterface) { }

  ngOnInit() {
  }

  public onMenuItemSelected(e: MouseEvent, selectedMenuItem: NodeMenuItem): void {
    console.log(selectedMenuItem);
    switch(selectedMenuItem.name){
      case 'Add Node':
        this.tree.addNode({
          dataNode: {
            header: "HeaderLabelComponent",
            headerData: { label: "The label 1.1.1.1" },
            component: "DoubleInputNodeComponent"
          },
          childNodes: []
        } as TreeNode);
        break;
      case 'Delete node':
        this.tree.deleteNode();
        break;
    }
  }
}



export interface NodeMenuItem {
  name: string;
  cssClass?: string;
}
