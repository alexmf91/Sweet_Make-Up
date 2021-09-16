<template>
  <footer>
    <div class="footer-contact">
      <MainInfoFooter />
      <ContactForm />
    </div>
    <div class="footer-copyrigth">
      <span>Sweet Make-Up 2021 © Made with ♡ by Alex Muñoz</span>
    </div>
  </footer>
</template>
<script>
import MainInfoFooter from "./MainInfoFooter.vue";
import ContactForm from "./ContactForm.vue";

export default {
  name: "AppFooter",
  components: {
    MainInfoFooter,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

footer {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.footer-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem auto 0 auto;
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
@media screen and (min-width: 742px) {
  .footer-contact{
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
}

  @media screen and (min-width: 950px) {
  .footer-contact,.footer-copyrigth{
    zoom:130%;
  }
}
</style>
