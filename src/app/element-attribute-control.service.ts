import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElementAttribute } from './element-attribute';

@Injectable()
export class ElementAttributeControlService {

  constructor() { }

  toFormElementGroup(elementAttributes:ElementAttribute<any>[]) {
    let group: any = {};
    elementAttributes.forEach(elementAttribute => {
      group[elementAttribute.key] = elementAttribute.required ? new FormControl(elementAttribute.value || '', Validators.required) : new FormControl(elementAttribute.value || '');
      return new FormGroup(group);
    })
  }
}