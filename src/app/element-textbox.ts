import { ElementAttribute } from './element-attribute';

export class ElementTextbox extends ElementAttribute<string>{
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
