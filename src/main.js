import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // Импортируем роутер

createApp(App)
  .use(router)                 // Подключаем роутер к приложению
  .mount('#app')