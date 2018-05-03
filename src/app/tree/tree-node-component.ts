import {Observable} from 'rxjs/Observable';

export interface TreeNodeComponent {
  data: any;
  formValueChanges$: () => Observable<any>;
}
