<template>
  <main class="search-view" id="search">
    <div class="search-view__background-title">
      <h2 class="search-view__title">¿Qué estás buscando?</h2>
      <SearchBar class="search-view__search-bar" />
    </div>
    <ul>
      <li
        v-for="service in filteredServices"
        :key="service.name"
        :name="service.name"
        :category="service.type"
      >
        <img :src="service.picture" alt="" />
        <p>{{ service.name }}</p>
        <span> {{ service.price }}€</span>
        <router-link
          class="service-card"
          @click="scrollToTop"
          data-test="details-button"
          :to="'/service/' + service.type + '/' + service.name"
        >
          <button>Detalles</button>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import SearchBar from "../components/SearchBar.vue";

export default defineComponent({
  name: "Services",
  components: {
    SearchBar,
  },
  computed: {
    ...mapGetters(["filteredServices"]),
  },
  methods: {
    ...mapActions(["fetchServicesFromApi"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.fetchServicesFromApi();
  },
});
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
@import "../styles/mixins.scss";
.search-view__background-title {
  margin: 60px 0;
  width: 100%;
  height: fit-content;
}
.search-view {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #ffffffc4;
  &__background-title {
    background: #ffffffc4;
    margin: 0 auto 40px;
    height: fit-content;
    left: 0;
    right: 0;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: $secondary-color;
    font-size: 5vw;
    font-weight: 300;
    margin: 50px 0;
  }
  &__search-bar {
    width: 90%;
  }
}
ul {
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  justify-content: center;
  max-width: 64rem;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 20px;
    background-color: rgb(233, 233, 233);
    list-style: none;
    text-decoration: none;
    color: $primary-color;
    width: 35vw;
    max-width: 270px;
    height: 40vw;
    max-height: 320px;
    padding: 0.5vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    img {
      margin: 0 auto;
      width: 28vw;
      height: 20vw;
      max-height: 195px;
      max-width: 225px;
    }
    p {
      font-size: 2vw;
    }
    button {
      @include button($primary-color, $primary-color-hover, 10vw, 4vw);
      font-size: 2vw;
      max-width: 75px;
      max-height: 25px;
    }
    @media screen and(min-width: 720px) {
      button,
      p {
        font-size: 14.5px;
      }
      .search-view__title {
        font-size: 20px;
      }
    }
  }
}
</style>
