<template>
  <div>
    <h1>{{ name }}</h1>
    <CategoryServices />
  </div>
</template>

<script>
import CategoryServices from '../components/CategoryServices.vue';

export default {
  name: 'service-view',
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
.service {
  background-color: lightgreen;
}
</style>
