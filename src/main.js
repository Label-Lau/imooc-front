import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import router from './router'
import { useREM } from './utils/flexible'

useREM()
createApp(App).use(router).mount('#app')
