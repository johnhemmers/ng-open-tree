import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TreeComponentControl} from '../tree/tree-component-control';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-double-input-node',
  templateUrl: './double-input-node.component.html',
  styleUrls: ['./double-input-node.component.css']
})
export class DoubleInputNodeComponent implements OnInit, TreeComponentControl {
  @Input() data;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name1: '',
      name2: ''
    });
  }

  ngOnInit() {
    this.form.setValue(this.data);
  }

  formValueChanges$(): Observable<any> {
    return this.form.valueChanges;
  }
}
