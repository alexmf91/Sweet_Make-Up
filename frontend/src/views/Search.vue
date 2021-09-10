<template>
  <div class="search-view">
    <h2>Services</h2>
    <SearchBar />
    <ul>
      <li v-for="service in services" :key="service.name">
        <p>{{ service.name }}</p>
      </li>
    </ul>
    <CategoryServices />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import CategoryServices from "../components/CategoryServices.vue";
import SearchBar from "../components/SearchBar.vue";

export default defineComponent({
  name: "Services",
  components: {
    SearchBar,
    CategoryServices,
  },
  computed: {
    ...mapState(["services"]),
  },
  methods: {
    ...mapActions(["fetchServicesFromApi"]),
  },
  mounted() {
    this.fetchServicesFromApi();
  },
});
</script>

<style lang='scss' scoped>
.search-view{
    padding-top: 10rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

ul {
  background-color: violet;
  li {
    background-color: wheat;
  }
}
</style>
