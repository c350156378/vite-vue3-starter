import { createApp } from 'vue'
import ELementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'

import store from './store/index'
import router from './router/index'

const app = createApp(App)

app.use(ELementPlus)
app.use(router)
app.use(store)
app.mount('#app')
