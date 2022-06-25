import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(router).use(mLibs).mount('#app')
