import {Injectable} from '@angular/core';
import {SimpleNodeComponent} from '../simple-node/simple-node.component';
import {InputNodeComponent} from '../input-node/input-node.component';

@Injectable()
export class ComponentMappingService {
  private mappings = {
    'SimpleNodeComponent': SimpleNodeComponent,
    'InputNodeComponent': InputNodeComponent
  };

  constructor() { }

  public getType(type: string) {
    return this.mappings[type] || SimpleNodeComponent;
  }
}
