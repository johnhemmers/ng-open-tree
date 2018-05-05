import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TreeComponentControl} from '../tree/tree-component-control';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-input-node',
  templateUrl: './input-node.component.html',
  styleUrls: ['./input-node.component.css']
})
export class InputNodeComponent implements OnInit, TreeComponentControl {
  @Input() data;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: this.data
    });

  }

  ngOnInit() {
    this.form.setValue(this.data);
  }

  formValueChanges$(): Observable<any> {
    return this.form.valueChanges;
  }
}
