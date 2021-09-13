<template>
  <div class="home">
    <AppSweetBanner />
    <AppAboutBrand />
    <AppServices />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import AppSweetBanner from "../components/AppSweetBanner.vue";
import AppAboutBrand from "../components/AppAboutBrand.vue";
import AppServices from "../components/AppHomeServices.vue";

export default defineComponent({
  name: "Home",
  components: {
    AppSweetBanner,
    AppAboutBrand,
    AppServices,
  },
});
</script>

<style lang='scss' scoped>
.home {
  padding-top: 8rem;
}
</style>
