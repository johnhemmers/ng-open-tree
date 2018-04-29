import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TreeNodeData} from '../tree/tree-node-data';

@Component({
  selector: 'app-input-node',
  templateUrl: './input-node.component.html',
  styleUrls: ['./input-node.component.css']
})
export class InputNodeComponent implements OnInit, TreeNodeData {
  @Input() data;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ''
    });

  }

  ngOnInit() {
    const nameControl = this.form.get('name');
    nameControl.setValue('hello!');
    nameControl.valueChanges.forEach((value) => console.log(value));
  }
}
