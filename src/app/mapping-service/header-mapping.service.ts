import {Injectable, Type} from '@angular/core';
import {HeaderLabelComponent} from '../header-label/header-label.component';

@Injectable()
export class HeaderMappingService {
  private mappings = {
    'HeaderLabelComponent': HeaderLabelComponent
  };

  constructor() { }

  public getType(type: string): Type<any> {
    return this.mappings[type] || HeaderLabelComponent;
  };
}
