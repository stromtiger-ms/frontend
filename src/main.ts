import { createApp } from 'vue'
import './style.css'
import router from './routes'
import App from './App.vue'
import {VueCsvImportPlugin} from "vue-csv-import";


const app = createApp(App)

app.use(router)

app.use(VueCsvImportPlugin)
   .mount('#app')
