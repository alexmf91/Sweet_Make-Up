<template>
  <main class="details-view" id='service-details'>
    <div class="details-view-content">
      <h1>{{ currentService.name }}</h1>
      <div class="details-view__service-details">
        <img :src="currentService.picture" alt="" />
        <div class="service-details__descriptions">
          <span class="descriptions__service-description">{{
            currentService.description
          }}</span>
          <div class="descriptions__duration-price">
            <span>
              Duración:
              <span class="duration-price__duration">
                {{ currentService.duration }}m
              </span>
            </span>
            <span>
              Precio:
              <span class="duration-price__price"
                >{{ currentService.price }}€
              </span>
            </span>
          </div>
          <button data-test='addToCartButton' @click="addToCart">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ServiceDetails",
  computed: {
    ...mapState(["currentService", "currentUser"]),
  },
  methods: {
    ...mapActions(["fetchOneServiceForNameFromApi", "addServiceToCart"]),
    addToCart() {
      if (!this.currentUser) {
        this.$router.push({ name: "Login" });
      } else {
        const currentUserAndService = {
          currentService: this.currentService,
          currentUserCart: this.currentUser.cart,
        };
        this.addServiceToCart(currentUserAndService);
        this.$toast("Añadido al carrito");
      }
    },
  },
  mounted() {
    const route = useRoute();
    const { name } = route.params;
    this.fetchOneServiceForNameFromApi(name);
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
@import "../styles/mixins.scss";

.details-view {
  padding: 7rem 0;
  .details-view-content {
    border-radius: 15px;
    padding: 5px;
    width: fit-content;
    margin: 0 auto;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    h1 {
      color: $secondary-color;
      text-transform: uppercase;
      padding: 10px;
    }
  }
  &__service-details {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
    height: fit-content;
    width: fit-content;
    img {
      width: 75vw;
      height: 75vw;
      max-width: 470px;
      max-height: 470px;
      margin: 0 auto;
    }
  }
  .service-details__descriptions {
    display: flex;
    flex-direction: column;
    padding: 20px;
    span {
      padding: 30px 0;
      font-size: 5vw;
      color: $secondary-color;
      font-weight: 300;
      text-align: justify;
    }
    .descriptions__service-description {
      padding: 0 15px;
    }
    .descriptions__duration-price {
      padding: 80px 0 10px;
    }
    div > span {
      padding: 15px;
      font-size: 20px;
      color: $secondary-color-hover;
      font-weight: 400;
      .duration-price__duration,
      .duration-price__price {
        color: $quartiary-color;
      }
    }
  }
  button {
    @include button($primary-color, $primary-color-hover, 25vw, 8vw);
    max-width: 179px;
    max-height: 57px;
    border-radius: 5px;
    margin: 30px auto 0;
  }
  @media screen and(min-width: 720px) {
    button {
      font-size: 21.5px;
    }
  }
  @media screen and(min-width: 690px) {
    button,
    p {
      font-size: 21.5px;
    }
    .service-details__descriptions {
      min-width: 265px;
      justify-content: space-between;
      span {
        font-size: 30px;
        width: 455px;
      }
    }
    .details-view__service-details {
      flex-direction: row;
      max-width: 975px;
    }
  }
}
</style>
