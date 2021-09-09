import { createApp } from 'vue';
import DKToast from 'vue-dk-toast';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(DKToast, {
    duration: 4000,
    positionY: 'bottom',
    positionX: 'right',
    disableClick: true,
    styles: {
      color: '#000',
      backgroundColor: '#fff',
    },
    max: 10,
  }).use(store).use(router)
  .mount('#app');
