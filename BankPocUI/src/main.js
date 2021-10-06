import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import VueSweetalert2 from 'sweetalert2';

createApp(App).use(router,VueSweetalert2).mount('#app')