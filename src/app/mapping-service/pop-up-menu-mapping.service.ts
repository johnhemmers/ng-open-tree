import { Injectable } from '@angular/core';
import {PopUpMenuComponent} from '../menu/pop-up-menu.component';

@Injectable()
export class PopUpMenuMappingService {
  private mappings = {
    'PopUpMenuComponent': PopUpMenuComponent
  };

  constructor() { }

  public getType(type: string) {
    return this.mappings[type] || PopUpMenuComponent;
  }
}
