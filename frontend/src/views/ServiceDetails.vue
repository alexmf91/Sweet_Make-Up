<template>
  <div>
    <h1>Hola panitas Aqui estan vuestros current services</h1>
    <h3>{{ currentService.name }}</h3>
    <p>{{ currentService.description }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ServiceDetails',
  computed: {
    ...mapState(['currentService']),
  },
  methods: {
    ...mapActions(['fetchOneServiceForNameFromApi']),
  },
  mounted() {
    const route = useRoute();
    const { name } = route.params;
    console.log(name);
    this.fetchOneServiceForNameFromApi(name);
  },
});
</script>
