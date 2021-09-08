<template>
  <div class="cart">
    <h1>Cart</h1>
    <ul>
      <li v-for="service in cart" :key="service">
        <p>{{ service.name }}</p>
        <p>{{ service.price }}</p>
      </li>
    </ul>
    <button>Comprar</button>
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

<style lang="scss" scoped>
.cart {
  background-color: whitesmoke;
}
</style>
