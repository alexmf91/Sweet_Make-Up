<template>
  <form
    @submit.prevent="register"
    class="register__form"
    data-test="register-button"
  >
    <div class="form__name-surname">
      <input
        class="name-surname__name-field"
        type="text"
        placeholder="Name"
        required
        v-model="name"
      />
      <input
        class="name-surname__surname-field"
        type="text"
        placeholder="Surname"
        required
        v-model="surname"
      />
    </div>
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="phone" v-model="phone" placeholder="Phone" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <input
      type="password"
      v-model="confirmPassword"
      placeholder="Confirm Password"
    />
    <p v-if="wrongPassword">Ups! El password no coincide... Prueba otra vez</p>
    <button class="form__submit-button" type="submit">Submit</button>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data: () => ({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    wrongPassword: false,
  }),
  methods: {
    ...mapActions(["registerUser"]),
    register() {
      if (this.password !== this.confirmPassword) {
        this.wrongPassword = true;
      } else {
        this.registerUser({
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        this.$router.push({ name: "Home" });
        this.wrongPassword = false;
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
  height: 450px;
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
