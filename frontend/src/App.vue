<template>
<div id='app'>
  <app-header></app-header>
  <router-view class='container'></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: { AppHeader, AppFooter },
};
</script>

<style lang='scss'>
@import "styles/reset.scss";

#app {
  font-family:'Josefin Sans', sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: lightslategrey;
  margin: 0 auto;
  padding: 0;
}
.container {
  padding-bottom: 4rem;
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
