<template>
  <section :class="'service-card ' + category" :key="id">
    <div class="service-card__service-info">
      <h3>{{ name }}</h3>
      <router-link
        class="service-info__link"
        :to="{
          name: 'service',
          params: { name, id, category, image, description },
        }"
        @click="scrollToTop"
      >
        <button>More</button>
      </router-link>
    </div>
    <img :src="image" alt="service-image" />
  </section>
</template>

<script>
export default {
  name: "service-card",
  props: {
    id: String,
    name: String,
    category: String,
    image: String,
    description: String,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
@import "../styles/mixins.scss";

.service-card {
  display: flex;
  width: 90%;
  margin: 0 auto;
  &__service-info {
    width: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    h3 {
      display: flex;
      justify-content: center;
      color: $primary-color;
      font-size: 3vw;
      text-transform: uppercase;
    }
    button {
      @include button($primary-color, $primary-color-hover, 10vw, 4vw);
    }
  }
  img {
    width: 50%;
    height: 30vw;
  }
}
.service-card.beauty_for_brides {
  flex-direction: row-reverse;
}
</style>
