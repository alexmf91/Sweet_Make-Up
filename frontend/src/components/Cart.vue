<template>
  <div class="cart">
    <h1>Cart</h1>
    <ul class="cart-content">
      <li v-for="service in getCartServices" :key="service">
        <p>{{ service.service.name }}</p>
        <div class="cart-content__amount">
          <button>-</button>
          <p>{{ service.amount }}</p>
          <button>+</button>
        </div>
      </li>
    </ul>
    <button>Comprar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Cart",
  computed: {
    ...mapState(["cart", "currentUser"]),
    ...mapGetters(["getCartServices"]),
  },
  methods: {
    ...mapActions(["fetchCartFromApi"]),
  },
  mounted() {
    this.fetchCartFromApi(this.currentUser.cart);
  },
});
</script>

<style lang="scss" scoped>
.cart {
  background-color: whitesmoke;
}
li {
  display: flex;
  justify-content: center;
  padding: 10px;
  &>p,div{
    padding: 10px;
  }
  .cart-content__amount {
    display: flex;
    flex-direction: row;
  }
}
</style>
