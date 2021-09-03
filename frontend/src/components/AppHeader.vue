<template>
  <header>
    <router-link class="btn-header button" to="/">
      <img class="main-logo" src="../assets/main-logo.svg" alt="" />
    </router-link>
    <div class="desktop-nav-links">
      <router-link class="btn-header button" to="/">Home</router-link>
      <router-link class="btn-header button" to="/Profile"
        >Nosotros</router-link
      >
      <router-link class="btn-header button" to="/">Servicios</router-link>
      <router-link class="btn-header button" to="/">Reservas</router-link>
      <router-link class="btn-header button" to="/">Contacto</router-link>
    </div>
    <div class="mobile-nav-links">
      <span class="user-icon button">
        <i class="fas fa-user fa-lg"></i>
      </span>
      <span class="cart-icon button">
        <i class="fas fa-shopping-cart fa-lg"></i>
      </span>
      <div class="burger-menu">
        <span class="burger-menu_icon">
          <i class="fas fa-bars fa-lg"></i>
        </span>
        <div class="burger-menu__content">
          <router-link class="btn-header button" to="/">Home</router-link>
          <router-link class="btn-header button" to="/Profile">Nosotros</router-link>
          <router-link class="btn-header button" to="/">Servicios</router-link>
          <router-link class="btn-header button" to="/">Reservas</router-link>
          <router-link class="btn-header button" to="/">Contacto</router-link>
        </div>
      </div>
      <div class='search-bar'>
        <span class="search-bar__icon button">
          <i class="fas fa-search fa-lg"></i>
        </span>
        <input class='search-bar__bar' type="text" placeholder="Search">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
header {
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0;
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.main-logo {
  margin-left: 0.9rem;
  width: 4rem;
  height: 4rem;
}
.desktop-nav-links {
  display: flex;
  align-items: center;
  .btn-header {
    color: $quartiary-color;
    cursor: pointer;
    text-decoration: none;
    padding: 0.1rem;
    margin: 0 0.2rem;
  }
}

.mobile-nav-links {
  margin-right: 0.9rem;
  min-width: fit-content;
  display: flex;
  span {
    margin: 0 0.5rem;
    color: $secondary-color;
  }
}
.burger-menu {
  position: relative;
}

.burger-menu__content {
  display:none;
  right: 10px;
  text-decoration: none;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  background-color: #fff;
  z-index: 9999;
  height: 200px;
  width: 120px;
  a{
    text-decoration: none;
    color:$quartiary-color;
    &:hover{
    color:$secondary-color;
    }
  }

}
.burger-menu:hover .burger-menu__content {
  display:flex;
  flex-direction: column;
  text-decoration: none;
}

.search-bar {
  position: relative;
}

.search-bar__bar{
  display:none;
  border-radius: 5rem;
  right: 0.5rem;
  text-decoration: none;
  padding-top: 4px;
  padding: 0.3rem;
  position: absolute;
  top: 100%;
  background-color: #fff;
  height: 30px;
  width: 120px;
  outline: none;

}
.search-bar:hover .search-bar__bar {
  display:flex;
  flex-direction: column;
  text-decoration: none;
}
@media screen and (max-width: 480px) {
  .desktop-nav-links,
  .search-bar,
  .user-icon {
    display: none;
    background-color: violet;
  }
}
@media screen and (min-width: 480px) {
  .burger-menu{
    display: none;
  }
}
</style>
