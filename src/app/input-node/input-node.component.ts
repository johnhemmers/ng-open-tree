import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-node',
  templateUrl: './input-node.component.html',
  styleUrls: ['./input-node.component.css']
})
export class InputNodeComponent implements OnInit {
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
