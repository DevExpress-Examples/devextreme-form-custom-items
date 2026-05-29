import { Component } from '@angular/core';

import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';

import { Service, type Employee } from './app.service';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';

@Component({
  imports: [DxFormModule, DxTextBoxModule, DxValidatorModule],
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employee: Employee;

  constructor(service: Service) {
    this.employee = service.getEmployee();
  }

  validateClick(): void {
    const validationResult = validationEngine.validateGroup('formGroup');

    if (!validationResult.isValid) {
      notify('dxForm is invalid', 'error', 2000);
    }
  }
}
