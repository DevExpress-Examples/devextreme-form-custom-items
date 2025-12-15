$(() => {
  const employee = {
    ID: 1,
    FirstName: 'Peter',
    LastName: 'Smith',
    Photo: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/petersmith.png',
  };

  $('#form').dxForm({
    validationGroup: 'formGroup',
    formData: employee,
    items: [
      {
        dataField: 'FirstName',
      },
      {
        dataField: 'LastName',
        isRequired: true,
        template(data, itemElement) {
          $('<div>')
            .dxTextBox({
              value: employee.LastName,
              onValueChanged(e) {
                data.component.updateData(data.dataField, e.value);
              },
            })
            .dxValidator({
              validationGroup: 'formGroup',
              validationRules: [
                {
                  type: 'required',
                  message: 'LastName is required',
                },
              ],
            })
            .appendTo(itemElement);
        },
      },
      {
        dataField: 'Photo',
        template(data, itemElement) {
          $('<img>')
            .attr({
              id: 'form-avatar',
              src: employee.Photo,
              alt: 'employee',
            })
            .appendTo(itemElement);
        },
      },
      {
        itemType: 'button',
        horizontalAlignment: 'left',
        buttonOptions: {
          text: 'Validate',
          type: 'success',
          onClick() {
            const validationResult = DevExpress.validationEngine.validateGroup('formGroup');

            if (!validationResult.isValid) {
              // eslint-disable-next-line no-alert
              DevExpress.ui.notify('dxForm is invalid', 'error', 2000);
            }
          },
        },
      },
    ],
  });
});
