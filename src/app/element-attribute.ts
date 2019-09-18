export class ElementAttribute<T> {
  /*
  Value : set default value of an element
  label : set label of an element
  required : field is required : true | false
  order : arrange elements in sequence
  controlType : declare wether it is 'TextBox', 'Dropdown', 'TextArea'
  */
  value: T;
  key: string;
  label: string;
  required: boolean;
  placeholder: string;
  order: number;
  controlType: string;

  /*
  Initialization of attributes of element and defining default values for above attributes
  in options
  */
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    placeholder?: string,
    order?: number,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.placeholder = options.placeholder === undefined ? '' : options.placeholder;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
