<template>
  <footer>
    <div class="footer-contact">
      <div class="footer-contact__info">
        <img src="../assets/main-logo.svg" alt="main-logo" />
        <div class="info__main-info">
          <i class="fas fa-phone-alt">
            <p>+34 93 745 300</p>
          </i>
          <i class="fas fa-envelope"></i>
          <p>sweet@make-up.comess</p>
          <i class="fas fa-map-marker-alt"></i>
          <p>Via Augusta, 250, 08021 Barcelona</p>
        </div>
        <div class="info__social-media">socialmedia</div>
      </div>
      <div class="footer-contact__form">
        <h3>CONTACT ME</h3>
        <div class="form__name-surname">
          <input class='name-surname__name-field' type="text" placeholder="Name" />
          <input class='name-surname__surname-field' type="text" placeholder="Surname" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone" />
        <input type="text" placeholder="Write your message.." height="200"/>
        <button class='form__submit-button' type="submit">Submit</button>
      </div>
    </div>
    <div class="footer-copyrigth">
      <span>Sweet Make-Up 2021 © Made with ♡ by Alex Muñoz</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
};
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

footer {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: rgb(241, 190, 138);
}
.footer-contact {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  background-color: lightblue;
  margin: 5rem auto;
  & > div {
    display: flex;
    flex-direction: column;
    width: 355px;
    height: 355px;
    margin: 10vw auto;
    border: solid 5px $primary-color;
  }
  &__info {
    background-color: white;
    img {
      margin: 0 auto;
      width: 15rem;
      height: 15rem;
    }
    .info__main-info {
      margin-top: -15px;
    }
  }
  &__form {
    background-color: white;
    padding: 1.5rem 2.8rem;
    h3{
      color:$primary-color;
      margin-bottom: .5rem;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      margin: .5rem 0;

      input{
        height: 2rem;
        width: 7.5rem;
      }
    }
    & > input{
      display:flex;
      justify-content: center;
      margin: 0.5rem auto;
      height: 2rem;
      width: 16rem;
    }
    button{
      height: 2rem;
    }
  }
}
.footer-copyrigth {
  background-color: $tertiary-color;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  span {
    color: $fivetiary-color;
    font-size: 0.5rem;
  }
}
</style>
