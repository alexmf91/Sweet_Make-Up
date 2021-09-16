<template>
  <header>
    <router-link data-test='main-logo' class="btn-header button" to="/" @click="scrollToTop">
      <img class="main-logo" src="../assets/main-logo.svg" alt="" />
    </router-link>
    <nav class="desktop-nav-links" aria-labelledby="Navigation">
      <router-link class="btn-header button" to="/" @click="scrollToTop"
        >Home
      </router-link>
      <a class="btn-header button" href="#about">About</a>
      <a class="btn-header button" href="#services">Servicios</a>
      <router-link class="btn-header button" to="/" @click="scrollToTop"
        >Reservas</router-link
      >
      <a class="btn-header button" href="#footer">Contacto</a>
    </nav>
    <nav class="mobile-nav-links" aria-labelledby="Navigation">
      <div class="mobile-nav-links__user">
        <span class="user-icon">
          <i class="fas fa-user fa-lg"></i>
        </span>
        <div v-if="currentUser" class="user-icon__content">
          <router-link to="/profile" @click="scrollToTop">Perfil</router-link>
          <button @click="logOut">Logout</button>
        </div>
        <div v-else class="user-icon__content">
          <router-link to="/login" @click="scrollToTop">Login</router-link>
          <router-link to="/register" @click="scrollToTop"
            >Registrate</router-link
          >
        </div>
      </div>
      <span class="cart-icon">
        <i class="fas fa-shopping-cart fa-lg"></i>
        <span class="cart-icon__quantity">
          {{ calculateCartQuantityItems }}
        </span>
        <CartHeader class="cart-content" />
      </span>
      <div class="burger-menu">
        <span class="burger-menu_icon">
          <i class="fas fa-bars fa-lg"></i>
        </span>
        <div class="burger-menu__content">
          <router-link class="btn-header button" to="/" @click="scrollToTop"
            >Home</router-link
          >
          <a class="btn-header button" href="#about">About</a>
          <a class="btn-header button" href="#services">Servicios</a>
          <router-link class="btn-header button" to="/" @click="scrollToTop"
            >Reservas</router-link
          >
          <a class="btn-header button" href="#footer">Contacto</a>
          <div v-if="currentUser" class="content__user">
            <router-link to="/profile" @click="scrollToTop">Perfil</router-link>
            <button data-test='logOut-button' @click="logOut">Logout</button>
          </div>
          <div v-else class="content__user">
            <router-link to="/login" @click="scrollToTop">Login</router-link>
            <router-link to="/register" @click="scrollToTop"
              >Registrate</router-link
            >
          </div>
        </div>
      </div>
      <div class="search-bar">
        <router-link to="/Search">
          <span class="search-bar__icon button">
            <i class="fas fa-search fa-lg"></i>
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import CartHeader from "./CartHeader.vue";

export default {
  name: "AppHeader",
  components: {
    CartHeader,
  },
  data: () => ({
    noUser: "",
  }),
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["calculateCartQuantityItems"]),
  },
  methods: {
    ...mapActions(["userLogOut"]),
    logOut() {
      this.userLogOut();
      localStorage.setItem("user", JSON.stringify(this.noUser));
      this.$router.push({ name: "Home" });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
header {
  background-color: rgb(252, 252, 252);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
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
  width: 4.5rem;
  height: 4.5rem;
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
    &:hover {
      color: $secondary-color;
    }
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

.mobile-nav-links__user {
  position: relative;
}

.user-icon__content {
  display: none;
  right: 15px;
  text-decoration: none;
  padding: 19px 15px 15px;
  position: absolute;
  top: 100%;
  background-color: #fff;
  z-index: 9999;
  height: fit-content;
  width: 100px;
  border-radius: 10px;
  a,
  button {
    text-decoration: none;
    padding: 3px 0;
    color: $quartiary-color;
    &:hover {
      color: $tertiary-color;
    }
  }
  &:hover {
    display: flex;
    flex-direction: column;
  }
}
.mobile-nav-links__user:hover .user-icon__content {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.cart-content {
  display: none;
  position: absolute;
  right: 55px;
  top: 50px;
  z-index: 2;
}
.cart-icon__quantity {
  position: absolute;
  right: 43px;
  top: 17px;
  background-color: white;
  border-radius: 10px;
  width: 15px;
  height: 15px;
}
.cart-icon:hover .cart-content {
  display: unset;
}
.burger-menu {
  position: relative;
}

.burger-menu__content {
  display: none;
  right: 10px;
  text-decoration: none;
  padding: 24px 20px 20px;
  position: absolute;
  top: 100%;
  background-color: rgb(240, 235, 235);
  z-index: 9999;
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  a,
  div > a,
  div > button {
    text-decoration: none;
    color: $quartiary-color;
    margin: 5px;
    &:hover {
      color: $secondary-color;
    }
  }
}
.burger-menu:hover .burger-menu__content,
.content__user {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.search-bar {
  position: relative;
}

.search-bar__bar {
  display: none;
  border-radius: 5rem;
  right: 0.5rem;
  text-decoration: none;
  padding: 0.55rem 0.3rem 0.3rem;
  position: absolute;
  top: 100%;
  background-color: #fff;
  height: 30px;
  width: 120px;
  outline: none;
}
.search-bar:hover .search-bar__bar {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
i {
  font-family: "Font Awesome 5 Free", sans-serif;
}
@media screen and (max-width: 480px) {
  .desktop-nav-links,
  .search-bar,
  .user-icon {
    display: none;
  }
}
@media screen and (min-width: 480px) {
  .burger-menu {
    display: none;
  }
}
@media screen and (max-width: 555px) {
  .desktop-nav-links {
    zoom: 90%;
  }
}
@media screen and (min-width: 755px) {
  .desktop-nav-links {
    zoom: 120%;
  }
}
</style>
