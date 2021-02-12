import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxFormModule,
    DxValidatorModule,
    DxTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
