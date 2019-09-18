import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementAttribute } from '../element-attribute';
import { ElementAttributeService } from '../element-attribute.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ElementAttributeService]
})
export class DynamicFormComponent implements OnInit {

  @Input() elementAttributes: ElementAttribute<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private eas: ElementAttributeService) {
  }

  ngOnInit() {
    this.form = this.eas.toFormElementGroup(this.elementAttributes);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}