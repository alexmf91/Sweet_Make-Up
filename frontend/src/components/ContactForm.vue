<template>
  <div class="footer-contact__form">
    <h3>CONTACT ME</h3>
    <div class="form__name-surname">
      <input class="name-surname__name-field" type="text" placeholder="Name" />
      <input
        class="name-surname__surname-field"
        type="text"
        placeholder="Surname"
      />
    </div>
    <input type="email" placeholder="Email" />
    <input type="phone" placeholder="Phone" />
    <textarea
      name=""
      id=""
      cols="30"
      rows="6"
      placeholder="Write your message.."
    ></textarea>
    <button class="form__submit-button" type="submit">Submit</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.footer-contact__form {
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 375px;
  margin: 10vw auto;
  border: solid 5px $primary-color;
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
    margin-top: 1rem;
    align-self: flex-end;
    background-color: $primary-color;
    border: none;
    color: white;
    &:hover {
      background-color: $primary-color-hover;
      font-weight: 600;
    }
  }
}
</style>
