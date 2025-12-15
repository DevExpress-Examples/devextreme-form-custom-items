<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxForm, DxSimpleItem, DxButtonItem } from 'devextreme-vue/form';
import DxTextBox from 'devextreme-vue/text-box';
import { DxValidator, DxRequiredRule } from 'devextreme-vue/validator';

import validationEngine from 'devextreme/ui/validation_engine';
import notify from 'devextreme/ui/notify';

import { getEmployee, type Employee } from '../data';

const employee = ref<Employee>(getEmployee());

function validateClick(): void {
  const validationResult = validationEngine.validateGroup('formGroup');

  if (!validationResult.isValid) {
    notify('dxForm is invalid', 'error', 2000);
  }
}
const buttonOptions = { text: 'Validate', type: 'success', onClick: validateClick };
</script>

<template>
  <DxForm
    :form-data="employee"
    validation-group="formGroup"
  >
    <DxSimpleItem data-field="FirstName"/>
    <DxSimpleItem
      data-field="LastName"
      :is-required="true"
      template="lastName"
    />
    <DxSimpleItem
      data-field="Photo"
      template="photo"
    />
    <DxButtonItem
      item-type="button"
      horizontal-alignment="left"
      :button-options="buttonOptions"
    />

    <template #photo>
      <img
        id="form-avatar"
        :src="employee.Photo"
        alt="employee"
      >
    </template>

    <template #lastName>
      <DxTextBox v-model:value="employee.LastName">
        <DxValidator validation-group="formGroup">
          <DxRequiredRule message="LastName is required"/>
        </DxValidator>
      </DxTextBox>
    </template>
  </DxForm>
</template>

<style scoped>
#form-avatar {
  height: 128px;
  width: 128px;
}
</style>

