<template>
  <div id="app">
    <app-header></app-header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: { AppHeader, AppFooter },
};
</script>

<style lang='scss'>
@import "styles/reset.scss";

#app {
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://i.ibb.co/M7NQNKh/textura-marmol-dorado-rosado-125540-836.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
