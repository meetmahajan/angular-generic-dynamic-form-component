import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementAttribute } from '../element-attribute';
import { ElementAttributeService } from '../element-attribute.service';

@Component({
  selector: 'app-dynamic-element-form',
  templateUrl: './dynamic-element-form.component.html',
  styleUrls: ['./dynamic-element-form.component.css']
})
export class DynamicElementFormComponent implements OnInit {
  @Input() elementAttributes: ElementAttribute<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.elementAttributes.key].valid; }
  constructor() { }

  ngOnInit() {
  }

}