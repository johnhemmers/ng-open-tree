import {Component, Input, OnInit} from '@angular/core';
import {TreeNodeComponent} from '../tree/tree-node-component';
import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';

@Component({
  selector: 'app-header-label',
  templateUrl: './header-label.component.html',
  styleUrls: ['./header-label.component.css']
})
export class HeaderLabelComponent implements OnInit, TreeNodeComponent {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  formValueChanges$(): Observable<any> {
    return empty();
  }
}
