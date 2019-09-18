import { Injectable } from '@angular/core';

import { ElementDropdown } from './element-dropdown';
import { ElementAttribute } from './element-attribute';
import { ElementTextbox } from './element-textbox';

@Injectable()
export class ElementAttributeService {

  constructor() { }
  getElementAttributes() {

    const elementAttributes: ElementAttribute<any>[] = [

      new ElementDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new ElementTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new ElementTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return elementAttributes.sort((a, b) => a.order - b.order);
  }
}
