<template>
    <div class="services__main-content">
      <h2>SERVICES</h2>
      <hr />
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.services__main-content {
  margin: 3rem auto 0;
  padding: 5rem 3rem 8rem;
  width: 100%;
  height: fit-content;
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
</style>
