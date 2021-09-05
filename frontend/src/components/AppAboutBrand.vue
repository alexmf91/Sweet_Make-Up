<template>
  <div class="about-brand">
    <div class="about-brand__main-content">
      <h2>ABOUT BRAND</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        hic, fugiat molestiae adipisci deserunt assumenda excepturi, doloribus
        temporibus inventore a facilis sit ducimus ipsa fuga voluptas commodi
        possimus repudiandae. Explicabo?
      </p>
    </div>
    <div class="about-brand__image">
      <img src="" alt=""/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
.about-brand{
    margin: 10rem auto;
    background-color: lightgoldenrodyellow;
    padding: 3rem 0;
}
.about-brand__main-content {
  margin: 3rem auto;
  background-color: rgb(233, 227, 227);
  padding: 1.8rem 3rem;
  width: fit-content;
}
h2 {
  color: $primary-color;
  font-size: 5vw;
  font-weight: bold;
}
hr {
  margin: 1rem 0;
  background-color: $secondary-color;
  border: solid 1px $secondary-color;
}
p {
  color: $tertiary-color;
  font-size: 3vw;
}
.about-brand__image {
  margin: 2rem auto;
  background-color: rgb(238, 238, 17);
  width: 60vw;
  height: 40vw;
}
</style>
