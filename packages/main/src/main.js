import { createApp } from 'vue';
import './style.css';
import '@scream/map/dist/style.css';
import App from './App.vue';
import router from './router/Router.js';
import * as components from './components/fCard';

const app = createApp(App);

app.use(router);

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount('#app');
