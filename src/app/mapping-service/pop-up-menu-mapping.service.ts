import {Injectable, Type} from '@angular/core';
import {PopUpMenuComponent} from '../menu/pop-up-menu.component';

@Injectable()
export class PopUpMenuMappingService {
  private mappings = {
    'PopUpMenuComponent': PopUpMenuComponent
  };

  constructor() { }

  public getType(type: string): Type<any> {
    return this.mappings[type] || PopUpMenuComponent;
  }
}
