<template>
  <div class="register-view">
    <h2>Register</h2>
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterForm from "../components/RegisterForm.vue";

export default defineComponent({
  name: "Register",
  components: {
    RegisterForm,
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
