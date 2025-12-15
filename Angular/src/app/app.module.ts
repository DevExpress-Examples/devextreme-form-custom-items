import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxTextBoxModule,
    DxValidatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
