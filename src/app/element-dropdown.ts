import { ElementAttribute } from './element-attribute';

export class ElementDropdown extends ElementAttribute<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
