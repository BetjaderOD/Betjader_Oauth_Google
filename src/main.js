import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID = '576506670627-hjjh1euiesrb45p7v95reitrh3pfovf7.apps.googleusercontent.com'
const app = createApp(App)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,

  })
app.use(router)

app.mount('#app')
