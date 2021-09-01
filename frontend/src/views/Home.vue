<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hola-mundo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HolaMundo from "../components/HolaMundo.vue";

export default defineComponent({
  name: "Home",
  components: { HolaMundo },
});
</script>
