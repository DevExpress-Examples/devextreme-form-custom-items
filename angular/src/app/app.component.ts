import { Component } from "@angular/core";
import { Service } from "./app.service";

import validationEngine from "devextreme/ui/validation_engine";

@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee: any;

  constructor(service: Service) {
    this.employee = service.getEmploee();
  }

  validateClick(){
    let validationResult = validationEngine.validateGroup("formGroup");

    if (!validationResult.isValid)
        alert("dxForm is invalid");
  }
}