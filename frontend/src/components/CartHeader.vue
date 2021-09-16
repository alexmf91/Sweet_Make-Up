<template>
  <div class="cart">
    <ul class="cart_content">
      <li v-for="service in getCartServices" :key="service">
        <div class="cart-content__img-and-name">
          <img :src="service.service.picture" alt="" />
          <span>{{ service.service.name }}</span>
        </div>
        <span class="service-amount">{{ service.amount }}</span>
      </li>
    </ul>
    <div class="cart_nav">
      <router-link to="/Cart">
        <button>Carrito<i class="fas fa-shopping-cart"></i></button>
      </router-link>
      <span
        >TOTAL: <span class="price">{{ calculateTotalCartPrice }} €</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "CartHeader",
  computed: {
    ...mapState(["cart", "currentUser"]),
    ...mapGetters(["getCartServices", "calculateTotalCartPrice"]),
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
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.cart {
  background-color: whitesmoke;
  height: fit-content;
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  .cart-content__img-and-name {
    font-size: 10px;
    display: flex;
    align-items: center;
    padding: 5px;
    img{
      width: 50px;
    }
    span {
      padding: 0 8px;
      color: $quartiary-color;
    }
  }
}
.service-amount {
  display: flex;
  align-items: center;
  font-size: 10px;
  color: $quartiary-color;
  padding: 5px;
}
.cart_nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  color: $quartiary-color;
  font-size: 14px;
  .price {
    color: rgb(37, 36, 36);
  }
}
button {
  border-radius: 5px;
  border: solid 1px black;
  padding: 5px;
  background-color: $secondary-color;
  color: white;

  i {
    font-family: "Font Awesome 5 Free", sans-serif;
  }
  &:hover {
    cursor: pointer;
    background-color: $secondary-color-hover;
  }
}
</style>
