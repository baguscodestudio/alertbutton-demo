<script setup lang="ts">
import { ref } from 'vue';

let visible = ref(false);
let alertType = ref('info');
const showAlert = (type: string) => {
  alertType.value = type;
  visible.value = true;
};
const clickAlertButton = (type: string) => {
  alert(`You clicked ${type} button!`);
};
</script>

<template>
  <Alert
    :key="alertType"
    :show="visible"
    :type="alertType"
    @onClose="visible = false"
    @onClickPrimary="clickAlertButton('primary')"
    @onClickSecondary="clickAlertButton('secondary')"
    buttonTextPrimary="Primary"
    buttonTextSecondary="Secondary"
  >
    <template #title>This is a demo of the template</template>
    <template #description>
      Template description lorem ipsum dolor sit amet
    </template>
  </Alert>
  <div class="container">
    <h1>
      Baguscodestudio -
      <a
        target="_blank"
        href="https://www.npmjs.com/package/@baguscodestudio/alertbutton"
        ><strong>AlertButton</strong></a
      >
      Demo
    </h1>
    <SpecialButton
      @onClick="showAlert('info')"
      variant="icon-text"
      direction="left"
    >
      Show Info
    </SpecialButton>
    <SpecialButton
      @onClick="showAlert('error')"
      type="secondary"
      variant="icon-text"
      direction="left"
    >
      Show Error
    </SpecialButton>
    <SpecialButton @onClick="showAlert('warning')" variant="text-icon">
      Show Warning
    </SpecialButton>
    <SpecialButton
      @onClick="showAlert('success')"
      type="secondary"
      variant="text-icon"
    >
      Show Success
    </SpecialButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
