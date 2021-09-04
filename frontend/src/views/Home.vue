<template>
  <div class='home'>
    <AppSweetBanner />
    <AppAboutBrand />
      <app-services></app-services>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import AppServices from '../components/Services.vue';
import AppSweetBanner from '../components/AppSweetBanner.vue';
import AppAboutBrand from '../components/AppAboutBrand.vue';

export default defineComponent({
  name: 'Home',
  components: { AppServices, AppSweetBanner, AppAboutBrand },
});
</script>

<style lang='scss' scoped>

</style>
