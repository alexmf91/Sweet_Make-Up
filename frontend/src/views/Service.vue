<template>
  <main class="services-container">
    <h1>{{ name }}</h1>
    <CategoryServices />
  </main>
</template>

<script>
import CategoryServices from "../components/CategoryServices.vue";

export default {
  name: "service-view",
  components: {
    CategoryServices,
  },
  props: {
    id: String,
    name: String,
    category: String,
  },
};
</script>

<style lang='scss' scoped>
.services-container {
  background-color: lightgreen;
  padding-top: 10rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
