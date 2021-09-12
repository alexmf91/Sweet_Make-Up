<template>
  <div class="search-bar">
    <div class="search-bar__search-input">
      <input
        type="text"
        v-model="searchString"
        v-on:input="filterServices(searchString)"
      />
      <button><i class="fas fa-search fa-lg"></i></button>
    </div>
    <select
      v-model="typeSelected"
      class="search-bar__categorys"
      name="Categorias"
      v-bind="filterByCategory(typeSelected)"
    >
      <option selected disabled value="">Categorias</option>
      <option value="make_up_and_hairstyles">
        Maquillaje y peinados para eventos
      </option>
      <option value="beauty_for_brides">Belleza para novias</option>
      <option value="beauty_corner">Beauty corner</option>
    </select>
    <select
      class="search-bar__sort"
      name="sort"
      v-model="sortPriceSelected"
      v-bind="sortByPrice(sortPriceSelected)"
    >
      <option selected disabled value="">Ordenar</option>
      <option value="rising">Por precio ascendente</option>
      <option value="descending">Por precio descendente</option>
    </select>
    <p>{{ sortPriceSelected }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  data: () => ({
    searchString: "",
    typeSelected: "",
    sortPriceSelected: "",
  }),
  methods: {
    ...mapActions(["filterServices", "filterByCategory", "sortByPrice"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";

.search-bar {
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 890px;
  min-width: 393px;
  background-color: white;
  padding: 0.8rem;
  &__search-input {
    display: flex;
    input {
      background-color: $sixtiary-color;
      border: none;
      height: 25px;
      width: 30vw;
      margin-right: 2px;
      max-width: 518px;
    }
    button {
      background-color: $primary-color;
      margin-left: 2px;
      border: none;
      width: 25px;
      height: 25px;
      color: white;
    }
  }
  &__categorys,
  &__sort {
    display: flex;
    width: 100px;
    justify-content: space-around;
    background-color: $sixtiary-color;
    align-items: center;
    height: 25px;
    border: none;
    button {
      border: none;
      background: transparent;
      display: flex;
      &:focus-within {
        outline: $primary-color-hover;
        border: 2px solid $primary-color-hover;
      }
      i {
        align-items: center;
        margin: 3px 3px 6px;
      }
    }
  }
}
i {
  font-family: "Font Awesome 5 Free";
}
</style>
