import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

// Bootstrap JS (inklusive Dropdowns, Tooltips usw.)
import 'bootstrap';

// Bootstrap SCSS importieren
import 'bootstrap/scss/bootstrap.scss';

// Eigene Styles mit Bootstrap überschreiben
import './custom_styles.scss';

// Fontawesome importieren
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from "@/store/index.js";

// Basis URL setzen
axios.defaults.baseURL = 'https://localhost:8089';

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
