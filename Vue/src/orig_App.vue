<template>
    <DxForm :form-data="employee" validation-group="formGroup">
      <DxItem data-field="FirstName" />
      <DxItem data-field="LastName" :is-required="true" template="lastName" />
      <DxItem data-field="Photo" template="photo" />
      <DxItem item-type="button" horizontal-alignment="left"
        :button-options="{ text: 'Validate', type: 'success', onClick: validateClick }" />

      <template #photo="{ data }">
        <img id="formAvatar" :src="employee.Photo"/>
      </template>

      <template #lastName="{ data }">
        <DxTextBox :value.sync="employee.LastName">
          <DxValidator validation-group="formGroup">
            <DxRequiredRule message="LastName is required"/>
          </DxValidator>
        </DxTextBox>
      </template>
    </DxForm>
</template>
<script>

import { DxForm, DxItem } from 'devextreme-vue/form';
import { DxTextBox } from 'devextreme-vue/text-box';
import {
  DxValidator,
  DxRequiredRule,
} from 'devextreme-vue/validator';

import validationEngine from "devextreme/ui/validation_engine";

import service from './data.js';

export default {
  components: {
    DxForm,
    DxItem,
    DxTextBox,
    DxValidator,
    DxRequiredRule
  },
  data() {
    return {
      employee: service.getEmployee()
    };
  },
  methods: {
    validateClick() {
      let validationResult = validationEngine.validateGroup("formGroup");

      if (!validationResult.isValid)
          alert("dxForm is invalid");
      }
  }
};
</script>

<style scoped>
  #formAvatar {
    height: 128px;
    width: 128px;
  }
</style>