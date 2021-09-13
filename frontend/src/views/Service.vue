<template>
  <main class="services-container">
    <div class="services-container__description" style>
      <img :src="image" alt="" />
      <p>{{ description }}</p>
    </div>
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
    image: String,
    description: String,
  },
};
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
@import "../styles/mixins.scss";

.services-container {
  padding-top: 7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__description {
    border-top: 1vw solid $primary-color;
    border-bottom: 1vw solid $primary-color;
    background-color: white;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    h1 {
      font-size: 5vw;
      font-weight: 400;
      color: $secondary-color;
      padding: 20px 0;
    }
    img {
      width: 30vw;
      height: 25vw;
      margin: 0 auto;
    }
    p{
      text-align: center;
      font-weight: 300;
      color: $quartiary-color;
      padding: 10px 25px;
      font-size: 2vw;
    }
  }
}
</style>
