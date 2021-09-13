<template>
  <section id='about' class="about-brand">
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
    <img
      class="about-brand__image"
      src="https://st.depositphotos.com/2884373/4996/i/600/depositphotos_49961447-stock-photo-woman-applying-make-up-for.jpg"
      alt=""
    />
  </section>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
.about-brand {
  margin: 50rem auto;
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
  width: 45vw;
  height: 30vw;
}
</style>
