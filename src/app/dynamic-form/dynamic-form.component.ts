import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementAttribute } from '../element-attribute';
import { ElementAttributeControlService } from '../element-attribute-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ElementAttributeControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() elementAttributes: ElementAttribute<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private elementAttributeControlService: ElementAttributeControlService) {
  }

  ngOnInit() {
    this.form = this.elementAttributeControlService.toFormElementGroup(this.elementAttributes);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
