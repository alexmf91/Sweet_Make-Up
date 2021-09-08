<template>
  <div class="user-card">
    <img :src="picture" alt="" />
    <div class="user-card__main-info">
      <p>Nombre: {{ name }}</p>
      <p>Apellidos: {{ surname }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCard",
  props: {
    name: String,
    surname: String,
    picture: String,
    email: String,
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.user-card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 3rem auto;
  width: 50vw;
  height: 60vw;
  max-height: 30rem;
  max-width: 25rem;
  background: #ffffff;
  border: 1px solid $primary-color;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    margin: 0 auto;
    height: 30vw;
    width: 30vw;
    max-height: 17rem;
    max-width: 17rem;
    border-radius: 50rem;
  }
  p{
    padding: 5px;
  }
}
</style>
