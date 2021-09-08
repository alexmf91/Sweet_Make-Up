<template>
  <div class="register-view">
    <h2>login</h2>
    <LogInForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogInForm from "../components/LogInForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LogInForm,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.register-view {
  background-color: $primary-color;
}
</style>
