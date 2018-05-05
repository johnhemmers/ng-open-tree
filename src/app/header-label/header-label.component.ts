import {Component, Input, OnInit} from '@angular/core';
import {TreeComponentControl} from '../tree/tree-component-control';
import {Observable} from 'rxjs/Observable';
import {empty} from 'rxjs/observable/empty';

@Component({
  selector: 'app-header-label',
  templateUrl: './header-label.component.html',
  styleUrls: ['./header-label.component.css']
})
export class HeaderLabelComponent implements OnInit, TreeComponentControl {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  formValueChanges$(): Observable<any> {
    return empty();
  }
}
