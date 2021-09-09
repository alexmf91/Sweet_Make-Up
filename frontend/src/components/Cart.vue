<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="cart-details">
      <h2>Productos</h2>
      <h2>Cantidad</h2>
      <h2>Precio</h2>
      <h2>Subtotal</h2>
    </div>
    <ul class="cart-content">
      <li v-for="service in getCartServices" :key="service">
        <button @click="deleteFromCart(service.service)">
          <i class="fas fa-minus-circle"></i>
        </button>
        <p>{{ service.service.name }}</p>
        <p>{{ service.service.price }}€</p>
        <div class="cart-content__amount">
          <button @click="removeFromCart(service.service)">-</button>
          <p>{{ service.amount }}</p>
          <button @click="addToCart(service.service)">+</button>
        </div>
        <span
          >{{
            calculateSubtotalPrice(service.amount, service.service.price)
          }}€</span
        >
      </li>
    </ul>
    <div>
      <h3>Total: {{ calculateTotalCartPrice }} €</h3>
    </div>
    <button>Comprar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Cart",
  data: () => ({
    subTotalPrice: 0,
  }),
  computed: {
    ...mapState(["cart", "currentUser"]),
    ...mapGetters(["getCartServices", "calculateTotalCartPrice"]),
  },
  methods: {
    ...mapActions([
      "fetchCartFromApi",
      "removeServiceToCart",
      "deleteServiceFromCart",
      "addServiceToCart",
    ]),
    calculateSubtotalPrice(amount: any, price: any) {
      this.subTotalPrice = amount * price;
      return this.subTotalPrice;
    },
    removeFromCart(service: any) {
      const currentUserAndService = {
        currentService: service,
        currentUserCart: this.currentUser.cart,
      };
      this.removeServiceToCart(currentUserAndService);
      this.$toast("Borrado del carrito");
    },
    addToCart(service: any) {
      const currentUserAndService = {
        currentService: service,
        currentUserCart: this.currentUser.cart,
      };
      this.addServiceToCart(currentUserAndService);
      this.$toast("Añadido al carrito");
    },
    deleteFromCart(service: any) {
      const currentUserAndService = {
        currentService: service,
        currentUserCart: this.currentUser.cart,
      };
      this.deleteServiceFromCart(currentUserAndService);
      this.$toast("Elminado del carrito");
    },
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
.cart-details {
  display: flex;
  justify-content: center;
  h2 {
    padding: 10px;
  }
}
li {
  display: flex;
  justify-content: center;
  padding: 10px;
  & > p,
  div {
    padding: 10px;
  }
  .cart-content__amount {
    display: flex;
    flex-direction: row;
  }
}
</style>
