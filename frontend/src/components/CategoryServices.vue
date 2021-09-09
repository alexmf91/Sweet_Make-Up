<template>
  <div class="category-services">
    <h2>Category Services Component</h2>
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
          :to="currentCategory + '/' + service.name"
        >
          <button>Detalles</button>
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
  background-color: salmon;
  padding: 20px;
}
ul {
  background-color: violet;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  max-width: 53rem;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    background-color: rgb(233, 233, 233);
    list-style: none;
    text-decoration: none;
    color: $primary-color;
    margin: 10px;
    width: 35vw;
    max-width: 240px;
    height: 40vw;
    max-height: 290px;
    padding: 0.5vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    img {
      margin: 0 auto;
      width: 28vw;
      height: 20vw;
      max-height: 155px;
      max-width: 185px;
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
    }
  }
}
</style>
