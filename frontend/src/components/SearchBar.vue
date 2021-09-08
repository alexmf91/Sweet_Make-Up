<template>
  <div class="search-bar">
    <div class="search-bar__search-input">
      <input type="text" />
      <button>O</button>
    </div>
    <div class="search-bar__categorys">
      <span>Categorias</span>
      <button>V</button>
    </div>
    <div class="search-bar__sort">
      <span>Ordenar</span>
      <button>V</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.search-bar {
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  max-width: 850px;
  min-width: 393px;
  background-color: white;
  padding: 0.8rem;
  &__search-input {
    input {
      background-color: $sixtiary-color;
      border: none;
      height: 25px;
      width: 30vw;
      margin-right: 2px;
    }
    button{
      background-color: $primary-color;
      margin-left: 2px;
      border: none;
      width: 25px;
      height: 25px;
    }
  }
  &__categorys, &__sort{
      display: flex;
      width: 100px;
      justify-content: center;
      background-color: $sixtiary-color;
      align-items: center;
      height: 25px;
  }

}
</style>
