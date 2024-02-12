import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import CModal from './components/CModal.vue'

createApp(App)
  .component('c-modal', CModal)
  .mount('#app')
