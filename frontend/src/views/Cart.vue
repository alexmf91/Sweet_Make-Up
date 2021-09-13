<template>
  <div class="cart">
    <div class="cart-details">
      <h2 class="cart-details__products">PRODUCTOS</h2>
      <h2 class="cart-details__price">PRECIO</h2>
      <h2 class="cart-details__quantity">CANTIDAD</h2>
      <h2 class="cart-details__subtotal">SUBTOTAL</h2>
    </div>
    <ul class="cart-content">
      <li v-for="service in getCartServices" :key="service">
        <div class="cart-content__name">
          <button @click="deleteFromCart(service.service)">
            <i class="far fa-times-circle fa-lg"></i>
          </button>
          <img :src="service.service.picture" alt="" />
          <span>{{ service.service.name }}</span>
        </div>
        <span class="cart-content__price">{{ service.service.price }}€</span>
        <div class="cart-content__amount">
          <button
            class="amount__remove"
            @click="removeFromCart(service.service)"
          >
            <i class="fas fa-minus"></i>
          </button>
          <p>{{ service.amount }}</p>
          <button class="amount__add" @click="addToCart(service.service)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <span class="cart-content__subtotal-price"
          >{{
            calculateSubtotalPrice(service.amount, service.service.price)
          }}€</span
        >
      </li>
    </ul>
    <div class="cart__totalprice">
      <h3>
        TOTAL: <span>{{ calculateTotalCartPrice }} €</span>
      </h3>
    </div>
    <button class="buy-button">Comprar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { Service } from "../types/interface";

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
    calculateSubtotalPrice(amount: number, price: number): number {
      this.subTotalPrice = amount * price;
      return this.subTotalPrice;
    },
    removeFromCart(service: Service) {
      const currentUserAndService = {
        currentService: service,
        currentUserCart: this.currentUser.cart,
      };
      this.removeServiceToCart(currentUserAndService);
      this.$toast("Borrado del carrito");
    },
    addToCart(service: Service) {
      const currentUserAndService = {
        currentService: service,
        currentUserCart: this.currentUser.cart,
      };
      this.addServiceToCart(currentUserAndService);
      this.$toast("Añadido al carrito");
    },
    deleteFromCart(service: Service) {
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
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.cart {
  background-color: whitesmoke;
  padding-top: 8rem;
  padding-bottom: 3rem;
  width: fit-content;
  margin: 0 auto;
}
.cart-details {
  display: none;
  h2 {
    padding: 7px;
  }
}
li {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  border-top: 2px solid $tertiary-color;
  align-items: center;
  width: fit-content;
  .cart-content__name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    img {
      padding: 20px;
      width: 120px;
      height: 120px;
    }
    button {
      border: none;
      background-color: transparent;
      i {
        font-family: "Font Awesome 5 Free";
      }
      &:hover {
        cursor: pointer;
        color: red;
      }
    }
    span {
      padding-left: 5px;
      align-items: center;
    }
  }
  & > span,
  div {
    padding: 10px;
  }
  .cart-content__price {
    width: 90px;
  }
  .cart-content__amount {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100px;
    button {
      border: none;
      background-color: transparent;
      padding: 0 8px;
      &:hover {
        cursor: pointer;
      }
    }
    .amount__remove:hover {
      color: red;
    }
    .amount__add:hover {
      color: green;
    }
  }
  .cart-content__subtotal-price {
    width: 100px;
  }
  i {
    font-family: "Font Awesome 5 Free";
  }
}
.cart__totalprice {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 190px;
  flex-direction: flex-end;
  padding: 20px;
  margin: 30px auto;
  border: solid 1px $quartiary-color;
  border-radius: 10px;
  & > h3 {
    justify-content: flex-end;
    color: $primary-color;
  }
  span {
    color: $quartiary-color;
    font-weight: 400;
  }
}
.buy-button {
  width: fit-content;
  padding: 6px;
  border: 2px solid $secondary-color;
  color: $secondary-color;
  border-radius: 7px;
  &:hover {
    background-color: $secondary-color-hover;
    color: white;
    cursor: pointer;
  }
}
@media screen and (min-width: 615px) {
  .cart-details {
    display: flex;
    font-size: 11px;
    justify-content: space-around;
    &__products {
      width: 320px;
    }
    &__price {
      width: 90px;
    }
    &__quantity {
      width: 100px;
    }
    &__subtotal {
      width: 100px;
    }
  }
  li {
    flex-direction: row;
    .cart-content__name {
      flex-direction: row;
    }
  }
}
@media screen and (min-width: 715px) {
  li {
    width: 80vw;
    justify-content: space-around;
  }
}
</style>
