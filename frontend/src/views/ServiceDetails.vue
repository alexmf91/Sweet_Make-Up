<template>
  <div class="details-view">
    <h1>Hola panitas Aqui estan vuestros current services</h1>
    <div class="service-details">
      <img :src="currentService.picture" alt="" />
      <h3>{{ currentService.name }}</h3>
      <p>{{ currentService.description }}</p>
      <p>{{ currentService.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
    <Cart />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";
import Cart from "../components/Cart.vue";

export default defineComponent({
  name: "ServiceDetails",
  components: {
    Cart,
  },
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
.details-view {
  padding-top: 10rem;
}
.service-details {
  background-color: wheat;
  height: fit-content;
}
</style>
