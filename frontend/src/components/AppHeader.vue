<template>
  <header>
    <router-link class="btn-header button" to="/">
      <img class="main-logo" src="../assets/main-logo.svg" alt="" />
    </router-link>
    <nav class="desktop-nav-links">
      <router-link class="btn-header button" to="/">Home</router-link>
      <router-link class="btn-header button" to="/Profile"
        >Nosotros</router-link
      >
      <router-link class="btn-header button" to="/">Servicios</router-link>
      <router-link class="btn-header button" to="/">Reservas</router-link>
      <router-link class="btn-header button" to="/">Contacto</router-link>
    </nav>
    <nav class="mobile-nav-links">
      <div class="mobile-nav-links__user">
        <span class="user-icon">
          <i class="fas fa-user fa-lg"></i>
        </span>
        <div v-if="currentUser" class="user-icon__content">
          <router-link to="/profile">Perfil</router-link>
          <button @click="logOut">Logout</button>
        </div>
        <div v-else class="user-icon__content">
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Registrate</router-link>
        </div>
      </div>
      <span class="cart-icon button">
        <i class="fas fa-shopping-cart fa-lg"></i>
      </span>
      <div class="burger-menu">
        <span class="burger-menu_icon">
          <i class="fas fa-bars fa-lg"></i>
        </span>
        <div class="burger-menu__content">
          <router-link class="btn-header button" to="/">Home</router-link>
          <router-link class="btn-header button" to="/Profile"
            >Nosotros</router-link
          >
          <router-link class="btn-header button" to="/">Servicios</router-link>
          <router-link class="btn-header button" to="/">Reservas</router-link>
          <router-link class="btn-header button" to="/">Contacto</router-link>
          <div v-if="currentUser" class="content__user">
            <router-link to="/profile">Perfil</router-link>
            <button @click="logOut">Logout</button>
          </div>
          <div v-else class="content__user">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Registrate</router-link>
          </div>
        </div>
      </div>
      <div class="search-bar">
        <span class="search-bar__icon button">
          <i class="fas fa-search fa-lg"></i>
        </span>
        <input
          class="search-bar__bar"
          v-model="searchValue"
          type="text"
          placeholder="Search"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app-header",
  data: () => ({
    noUser: "",
    searchValue: "",
  }),
  methods: {
    ...mapActions(["userLogOut"]),
    logOut() {
      this.userLogOut();
      localStorage.setItem("user", JSON.stringify(this.noUser));
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang='scss' scoped>
@import "../styles/reset.scss";
@import "../styles/colors.scss";
header {
  background-color: rgb(223, 215, 215);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%
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
  padding-top: 4px;
  padding: 15px;
  position: absolute;
  top: 100%;
  background-color: #fff;
  z-index: 9999;
  height: fit-content;
  width: 100px;
  a, button {
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
.burger-menu {
  position: relative;
}

.burger-menu__content {
  display: none;
  right: 10px;
  text-decoration: none;
  padding-top: 4px;
  padding:20px;
  position: absolute;
  top: 100%;
  background-color: rgb(240, 235, 235);
  z-index: 9999;
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  a, div>a, div>button {
    text-decoration: none;
    color: $quartiary-color;
    margin:5px;
    &:hover {
      color: $secondary-color;
    }
  }
}
.burger-menu:hover .burger-menu__content,.content__user {
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
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
i {
  font-family: "Font Awesome 5 Free";
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
