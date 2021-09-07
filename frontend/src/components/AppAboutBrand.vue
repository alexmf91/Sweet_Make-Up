<template>
  <div class="about-brand">
    <div class="about-brand__main-content">
      <h2>ABOUT BRAND</h2>
      <hr />
      <p>
        Sweet Makeup by Mireia Castellar nace tras 10 años de trayectoria en el
        ámbito del estilismo y la peluquería. Ofrecemos asesoramiento y
        estilismo que se adapten a tus necesidades, personalidad y gustos.
        Brillaras en tu gran día sin dejar de ser tu misma y resaltando tu
        belleza natural.
      </p>
    </div>
    <div class="about-brand__image">
      <img src="" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
.about-brand {
  margin: 20rem auto;
  background-color: rgb(236, 231, 231);
  padding: 2rem 0;
}
.about-brand__main-content {
  margin: 3rem auto;
  padding: 1.8rem 3rem;
  width: fit-content;
}
h2 {
  color: $primary-color;
  font-size: 5vw;
  font-weight: 300;
}
hr {
  margin: 1rem 0;
  background-color: $secondary-color;
  border: solid 1px $secondary-color;
}
p {
  color: $tertiary-color;
  font-size: 3vw;
  font-weight: 300;
}
.about-brand__image {
  margin: 2rem auto;
  background-color: rgb(238, 238, 17);
  width: 60vw;
  height: 40vw;
}
</style>
