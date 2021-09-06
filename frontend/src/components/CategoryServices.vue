<template>
  <div class="category-services">
    <h2>Category Services Component</h2>
    <h3>{{ name }}</h3>
    <ul>
      <li v-for="service in categoryServices"
      :key="service.name"
      :name='service.name'
      :category='currentCategory'>
        <router-link
          class="service-card"
          :to="currentCategory + '/' + service.name"
          >
          <p>{{ service.name }}</p>
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
ul {
  background-color: violet;
  li {
    background-color: wheat;
  }
}
</style>
