import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './pop-up-menu.component.html',
  styleUrls: ['./pop-up-menu.component.css']
})
export class PopUpMenuComponent implements OnInit {
  public availableMenuItems: NodeMenuItem[] = [
    {
      name: 'New tag',
      cssClass: 'new-tag'
    },
    {
      name: 'New folder',
      cssClass: 'new-folder'
    },
    {
      name: 'Rename',
      cssClass: 'rename'
    },
    {
      name: 'Remove',
      cssClass: 'remove'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onMenuItemSelected(e: MouseEvent, selectedMenuItem: NodeMenuItem): void {
    // if (isLeftButtonClicked(e)) {
    //   this.menuItemSelected.emit({
    //     nodeMenuItemAction: selectedMenuItem.action,
    //     nodeMenuItemSelected: selectedMenuItem.name
    //   });
    //
    //   this.nodeMenuService.fireMenuEvent(e.target as HTMLElement, NodeMenuAction.Close);
    // }
  }
}



export interface NodeMenuItem {
  name: string;
  cssClass?: string;
}
