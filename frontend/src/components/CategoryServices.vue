<template>
  <div class="category-services">
    <h2>Category Services Component</h2>
    <ul>
      <li v-for="service in categoryServices"
      :key="service.name"
      :name='service.name'
      :category='currentCategory'>
      <img :src="service.picture" alt="">
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

.category-services{
  background-color:salmon;
  padding: 20px;
}
ul {
  background-color: violet;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    margin:0 auto;
    justify-content: center;
    max-width: 33rem;
  li {
    background-color: rgb(233, 233, 233);
    list-style: none;
      text-decoration: none;
      color: $primary-color;
      margin:10px;
      width: 35vw;
      max-width: 240px;
      height: 40vw;
      max-height: 275px;
  }
}
</style>
