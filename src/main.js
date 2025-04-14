import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@mdi/font/css/materialdesignicons.css'
// import './assets/font-family/index.css'
import 'lanse/styles'
import { createVuetify } from 'lanse'
import * as components from 'lanse/components'
import * as directives from 'lanse/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(vuetify)


app.use(router)

app.mount('#app')
