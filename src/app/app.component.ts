import { Component } from '@angular/core';

import { ElementAttributeService } from './element-attribute.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ElementAttributeService]
})
export class AppComponent {
  elementAttribute: any[];
  constructor(service: ElementAttributeService) {
    this.elementAttribute = service.getElementAttributes();
  }
}
