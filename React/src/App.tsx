import { useCallback, useMemo, useState } from 'react';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';

import Form, { SimpleItem, ButtonItem, type FormTypes } from 'devextreme-react/form';
import TextBox, { type TextBoxTypes } from 'devextreme-react/text-box';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import type { ButtonTypes } from 'devextreme-react/button';

import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';

import { getEmployee, type Employee } from './data';

function App(): JSX.Element {
  const [employee] = useState<Employee>(getEmployee());

  const lastNameRender = useCallback(
    (data: FormTypes.SimpleItemTemplateData): JSX.Element => {
      // eslint-disable-next-line func-style
      const valueChanged = (e: TextBoxTypes.ValueChangedEvent): void => {
        if (data.component && data.dataField) {
          data.component.updateData(data.dataField, e.value);
        }
      };
      return (
        <TextBox defaultValue={employee.LastName} onValueChanged={valueChanged}>
          <Validator validationGroup="formGroup">
            <RequiredRule message="LastName is required" />
          </Validator>
        </TextBox>
      );
    },
    [employee.LastName],
  );

  const photoRender = useCallback(
    (): JSX.Element => <img id="form-avatar" src={employee.Photo} alt="employee" />,
    [employee.Photo],
  );
  const validateClick = useCallback((): void => {
    const validationResult = validationEngine.validateGroup('formGroup');

    if (!validationResult.isValid) {
      notify('dxForm is invalid', 'error', 2000);
    }
  }, []);

  const buttonOptions: ButtonTypes.Properties = useMemo(() => ({ text: 'Validate', type: 'success', onClick: validateClick }), [validateClick]);

  return (
    <Form formData={employee} validationGroup="formGroup">
      <SimpleItem dataField="FirstName" />
      <SimpleItem dataField="LastName" isRequired={true} render={lastNameRender} />
      <SimpleItem dataField="Photo" render={photoRender} />
      <ButtonItem
        itemType="button"
        horizontalAlignment="left"
        buttonOptions={buttonOptions}
      />
    </Form>
  );
}

export default App;
