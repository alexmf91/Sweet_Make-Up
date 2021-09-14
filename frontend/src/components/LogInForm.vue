<template>
  <div>
    <form
      @submit.prevent="login"
      class="register__form"
      id="login-form"
    >
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button
        class="form__submit-button"
        type="submit"
        data-test="login-button"
      >
        Submit
      </button>
    </form>
    <div v-if="somethingWrong">Ups!Algo ha ido mal, intentalo otra vez.</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  data: () => ({
    email: "",
    password: "",
    noUser: "",
    somethingWrong: false,
  }),
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login() {
      try {
        await this.loginUser({
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "Home" });
        this.somethingWrong = false;
      } catch (error) {
        this.somethingWrong = true;
      }
    },
  },
});
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.register__form {
  zoom: 110%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  height: 150px;
  margin: 5vw auto;
  border: solid 5px $secondary-color;
  background-color: white;
  padding: 1.5rem 2.8rem;
  h3 {
    color: $primary-color;
    margin-bottom: 0.5rem;
    display: flex;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0.4rem 0;

    input {
      height: 2rem;
      width: 7.5rem;
      border: 1px solid $primary-color;
      &::placeholder {
        color: $tertiary-color;
      }
      &:focus-within {
        outline: $primary-color-hover;
        border: 2px solid $primary-color-hover;
      }
    }
  }
  & > input {
    display: flex;
    justify-content: center;
    margin: 0.4rem auto;
    height: 2rem;
    width: 16rem;
    border: 1px solid $primary-color;
    &:focus-within {
      outline: $primary-color-hover;
      border: 2px solid $primary-color-hover;
    }
    &::placeholder {
      color: $tertiary-color;
    }
  }
  & > textarea {
    margin-top: 0.4rem;
    border: 1px solid $primary-color;
    &::placeholder {
      color: $tertiary-color;
    }
    &:focus-within {
      outline: $primary-color-hover;
      border: 2px solid $primary-color-hover;
    }
  }
  button {
    height: 2.2rem;
    width: 10rem;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: $primary-color;
    border: none;
    color: white;
    &:hover {
      background-color: $primary-color-hover;
      font-weight: 600;
    }
  }
}
@media screen and (min-width: 480px) {
  .register__form {
    zoom: 130%;
  }
}
</style>
