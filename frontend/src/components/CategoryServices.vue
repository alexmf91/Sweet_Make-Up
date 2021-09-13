<template>
  <div class="category-services">
    <ul>
      <li
        v-for="service in categoryServices"
        :key="service.name"
        :name="service.name"
        :category="currentCategory"
      >
        <img :src="service.picture" alt="" />
        <p>{{ service.name }}</p>
        <router-link
          class="service-card"
          @click="scrollToTop"
          :to="currentCategory + '/' + service.name"
        >
          <button >Detalles</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>
s
<script lang='ts'>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "CategoryServices",
  computed: {
    ...mapState(["categoryServices", "currentCategory"]),
  },
  methods: {
    ...mapActions(["fetchServicesForCategoryFromApi"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    const route = useRoute();
    const { category } = route.params;
    this.fetchServicesForCategoryFromApi(category);
  },
});
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
@import "../styles/mixins.scss";

.category-services {
  padding: 20px;
}
ul {
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  max-width: 74rem;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    margin: 0 auto;
    list-style: none;
    text-decoration: none;
    color: $primary-color;
    margin: 20px;
    width: 35vw;
    max-width: 350px;
    height: 40vw;
    max-height: 400px;
    padding: 0.5vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    img {
      margin: 0 auto;
      width: 28vw;
      height: 20vw;
      max-height: 215px;
      max-width: 295px;
    }
    p {
      font-size: 2vw;
    }
    button {
      @include button($primary-color, $primary-color-hover, 10vw, 4vw);
      font-size: 2vw;
      max-width: 85px;
      max-height: 35px;
    }
    @media screen and(min-width: 720px) {
      button,
      p {
        font-size: 19.5px;
      }
    }
  }
}
</style>
