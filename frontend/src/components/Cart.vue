<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="service in cart" :key="service"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(["cart"]),
  },
});
</script>
