import {Observable} from 'rxjs/Observable';

export interface TreeComponentControl {
  data: any;
  formValueChanges$: () => Observable<any>;
}
