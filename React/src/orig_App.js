import React from 'react';
import './App.css';

import { Form, Item } from 'devextreme-react/form';
import { TextBox } from 'devextreme-react/text-box';
import {
  Validator,
  RequiredRule,
} from 'devextreme-react/validator';

import validationEngine from "devextreme/ui/validation_engine";

import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: service.getEmployee()
    };

    this.lastNameRender = this.lastNameRender.bind(this);
    this.photoRender = this.photoRender.bind(this);
  }

  render() {
    return (
      <Form formData={this.state.employee} validationGroup="formGroup">
        <Item dataField="FirstName" />
        <Item dataField="LastName" isRequired={true} render={this.lastNameRender} />
        <Item dataField="Photo" render={this.photoRender} />
        <Item itemType="button" horizontalAlignment="left"
          buttonOptions={{ text: 'Validate', type: 'success', onClick: this.validateClick }} />
      </Form>
    );
  }

  lastNameRender(data) {
    let valueChanged = (e) => {
      data.component.updateData(data.dataField, e.value);
    };
  
    return (
      <TextBox defaultValue={this.state.employee.LastName} onValueChanged={valueChanged}>
        <Validator validationGroup="formGroup">
          <RequiredRule message="LastName is required"/>
        </Validator>
      </TextBox>
    );
  }
  
  photoRender(data) {
    return <img id="formAvatar" src={this.state.employee.Photo} alt="employee" />;
  }

  validateClick(e) {
    let validationResult = validationEngine.validateGroup("formGroup");

    if (!validationResult.isValid) {
        alert("dxForm is invalid");
    }
  }
}

export default App;