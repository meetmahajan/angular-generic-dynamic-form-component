import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { GenericFormComponent } from './generic-form/generic-form.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DynamicFormComponent, GenericFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
