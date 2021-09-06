<template>
  <div class="footer-contact__info">
    <img src="../assets/main-logo.svg" alt="main-logo" />
    <div class="info__main-info">
      <span>
        <i class="fas fa-phone-alt"></i>
        <p>+34 93 745 300</p>
      </span>
      <span>
        <i class="fas fa-envelope"></i>
        <p>sweet@make-up.comess</p>
      </span>
      <span>
        <i class="fas fa-map-marker-alt"></i>
        <p>Via Augusta, 250, 08021 Barcelona</p>
      </span>
    </div>
    <div class="info__social-media">
        <img src="https://img.icons8.com/ios/50/ffffff/facebook-circled--v1.png"/>
        <img src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"/>
        <img src="https://img.icons8.com/ios/50/ffffff/twitter--v1.png"/>
        <img src="https://img.icons8.com/ios/50/ffffff/pinterest--v1.png"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.footer-contact__info {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 375px;
  margin: 10vw auto;
  border: solid 5px $primary-color;
  img {
    margin: 0 auto;
    width: 15rem;
    height: 15rem;
  }
  .info__main-info {
    margin-top: -22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: $secondary-color;
  }
  span {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin: 0.1rem 0 0.1rem 3rem;
  }
}
.info__social-media {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: fit-content;
  margin-top: 15px;
  img {
    width: 45px;
    height: 45px;
    margin: 0 5px;
    padding: 6px;
    background-color: $primary-color;
    border-radius: 100%;
  }
}
i {
  font-family: "Font Awesome 5 Free";
  margin-right: 4px;
}
</style>
