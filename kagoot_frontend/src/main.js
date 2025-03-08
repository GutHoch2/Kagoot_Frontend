import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap JS (inklusive Dropdowns, Tooltips usw.)
import 'bootstrap';

// Bootstrap SCSS importieren
import 'bootstrap/scss/bootstrap.scss';

// Eigene Styles mit Bootstrap überschreiben
import './custom_styles.scss';

const app = createApp(App)

app.use(router)

app.mount('#app')
