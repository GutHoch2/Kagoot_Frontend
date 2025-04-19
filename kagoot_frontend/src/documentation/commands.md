# Anleitung

## 1. Bootstrap installieren
`npm install bootstrap@5.3.3`

## 2. SAAS installieren 
`npm install sass`

## 3. Bootstrap einbinden in main.js
`import 'bootstrap';`

## 4. Bootstrap SCSS einbinden in main.js
`import 'bootstrap/scss/bootstrap.scss';`

## 5. File custom_styles.scss erstellen
Auf gleicher Ebene wie main.js und mit Inhalt befüllen (siehe direkt im File)

## 6. Fontawesome installieren
npm install @fortawesome/fontawesome-free

## 7. Fontawesome einbinden in main.js
import '@fortawesome/fontawesome-free/css/all.min.css'

## 8. Vuex installieren
npm install vuex@next

## 9. Axios installieren
npm install axios

## 10 Vue Draggable installieren
npm install vuedraggable
Hinweise: zu Version und node_modules Ordner hier beachten: https://github.com/SortableJS/vue.draggable.next/issues/254


## 11. Um auf GitHub Pages zu deployen
npm install --save-dev gh-pages   
"deploy": "gh-pages -d dist" => ergänzen unter scripts in package.json
base: '/Kagoot_Frontend/', => ergänzen in vite.config.js
npm run build => dies erstellt dist-Ordner
npm run deploy => deployed Website auf GitHub Pages


