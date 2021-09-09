<template>
<div class='sweet-banner'>
  <div class='sweet-banner__main-content'>
    <h1>SWEET <br/> MAKE-UP</h1>
    <hr>
    <h2>By. Mireia Castellar</h2>
  </div>
  <div class='sweet-banner__buttons'>
    <button>Services</button>
    <button>Bookings</button>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.sweet-banner__main-content{
    margin: 0 auto;
    background-color:rgb(233, 227, 227);
    padding: 1.8rem 3rem;
    width: fit-content;
}
h1 {
  color: $primary-color;
  font-size: 10vw;
  font-weight: 400;
}
hr{
    margin: 1rem 0;
    background-color:$primary-color-hover;
    border: solid 1px $primary-color-hover;
}
h2{
  color: $tertiary-color;
  font-size: 3vw;
  font-weight: 300;
}
.sweet-banner__buttons{
    margin: 2rem;
}

button{
    background-color: $secondary-color;
    color:white;
    border: none;
    text-align: center;
    padding: 0.7rem 0.6rem 0.2rem 0.6rem;
    margin: 0 2rem;
    font-weight: 400;
    font-size: 4vw;
    border-radius: 1px;
    &:hover{
      background-color: $secondary-color-hover;
      cursor:pointer;
    }
}
</style>
