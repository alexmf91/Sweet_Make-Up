<template>
    <div class="services__main-content">
      <h2>SERVICES</h2>
      <hr />
      <p>
        Sweet Makeup by Mireia Castellar nace tras 10 años de trayectoria en el
        ámbito del estilismo y la peluquería. Ofrecemos asesoramiento.
      </p>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.services__main-content {
  margin: 3rem auto 0;
  padding: 5rem 3rem 12rem;
  width: fit-content;
  height: 45vw;
  background-color: white;

}
h2 {
  color: $primary-color;
  font-size: 5vw;
  font-weight: 300;
}
hr {
  margin: 1rem 0;
  background-color: $primary-color;
  border: solid 1px $primary-color;
}
p {
  color: $primary-color;
  font-size: 3vw;
  font-weight: 300;
}
</style>
