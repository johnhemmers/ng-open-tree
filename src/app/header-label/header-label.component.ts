import {Component, Input, OnInit} from '@angular/core';
import {TreeNodeData} from '../tree/tree-node-data';

@Component({
  selector: 'app-header-label',
  templateUrl: './header-label.component.html',
  styleUrls: ['./header-label.component.css']
})
export class HeaderLabelComponent implements OnInit, TreeNodeData {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
