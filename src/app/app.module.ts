import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicElementFormComponent } from './dynamic-element-form/dynamic-element-form.component';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicElementFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
