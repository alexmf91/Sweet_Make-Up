<template>
  <div class='services'>
    <h2>Services</h2>
      <ul>
        <li v-for='service in services' :key='service.name'>
          <p>{{service.name}}</p>
        </li>
      </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import {
  mapState, mapActions,
} from 'vuex';

export default defineComponent({
  name: 'Services',
  computed: {
    ...mapState([
      'services',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchServicesFromApi',
    ]),
  },
  mounted() {
    this.fetchServicesFromApi();
  },
});
</script>

<style lang='scss' scoped>
ul{
    background-color: violet;
    li{
        background-color: wheat;
    }
}
</style>
