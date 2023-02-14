import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AlertButtonPlugin from '@baguscodestudio/alertbutton';
import '@baguscodestudio/alertbutton/styles.css';

const app = createApp(App);
app.use(AlertButtonPlugin);
app.mount('#app');
