<template>
    <router-link
      class='service-card'
      v-bind:to="{ name: 'service', params: { name, id, category } }"
    >
    <h2>{{name}}</h2>
    </router-link>
</template>

<script>
export default {
  name: 'service-card',
  props: {
    id: String,
    name: String,
    category: String,
  },
};
</script>
