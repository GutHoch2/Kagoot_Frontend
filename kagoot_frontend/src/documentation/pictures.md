# 📸 Bilder als Props in Vue übergeben (mit Webpack/Vite)

## ❓ Problem

Wenn du einem Vue-Component ein Bild übergeben willst, denkst du vielleicht, das hier müsste funktionieren:

```vue
<home-card-component image-path="@/assets/images/playing_jump.jpg" />
```

Aber das Bild wird nicht angezeigt. Warum?

---

## ⚠️ Warum das nicht funktioniert

- Der Pfad `@/assets/images/...` ist ein Alias, den **nur das Build-Tool (Webpack oder Vite)** im **JavaScript** versteht.
- Wird dieser String direkt im HTML verwendet (z. B. im `<img>`-Tag), **weiß der Browser nichts davon**.
- Deshalb funktioniert der Pfad nicht, und das Bild wird nicht angezeigt.

---

## ✅ Die richtige Lösung: Bilder importieren und als Variable übergeben

### 1. Bild importieren

```js
import playingImage from "@/assets/images/playing_jump.jpg";
import creatingImage from "@/assets/images/creating.jpg";
```

### 2. Bild in `data()` oder `setup()` bereitstellen

```js
export default {
  data() {
    return {
      playingImage,
      creatingImage
    };
  }
}
```

### 3. Bild als Bindung (`:`) im Template übergeben

```vue
<home-card-component
  :image-path="playingImage"
  icon="fa-solid fa-dice me-4"
  title="An Quiz teilnehmen"
  subtitle="Tritt gegen andere Spieler an und teste dein Wissen!"
/>

<home-card-component
  :image-path="creatingImage"
  icon="fa-solid fa-compass-drafting me-4"
  title="Quiz erstellen & hosten"
  subtitle="Erstelle eigene Quizze, teile sie mit anderen!"
/>
```

### 4. Im Child-Component anzeigen

```vue
<img :src="imagePath" alt="Bildbeschreibung" />
```

---

## 💡 Warum das funktioniert

- Durch den `import` weiß das Build-Tool, dass es sich um ein Asset handelt.
- Es verarbeitet das Bild, kopiert es beim Build ins `dist`-Verzeichnis.
- Der `import` gibt dir einen finalen Pfad zurück wie `/assets/playing_jump.abc123.jpg`, den der Browser versteht.

---

## 🧪 Bonus: Dynamische Bildpfade zur Laufzeit

Wenn du Bilder zur Laufzeit je nach Dateiname laden willst:

### Methode definieren

```js
methods: {
  getImagePath(fileName) {
    return new URL(`@/assets/images/${fileName}`, import.meta.url).href;
  }
}
```

### Verwendung im Template

```vue
<home-card-component :image-path="getImagePath('playing_jump.jpg')" />
```

---

## ✅ Zusammenfassung (TL;DR)

| Ansatz                             | Funktioniert? | Erklärung                                                        |
|------------------------------------|---------------|------------------------------------------------------------------|
| `image-path="@/assets/..."`        | ❌ Nein       | Alias wird im Template nicht aufgelöst                          |
| `:image-path="importiertesBild"`   | ✅ Ja         | Webpack/Vite erkennen Asset, wandeln in gültige URL um          |
| `:src="require(imagePath)"`        | ⚠️ Teilweise  | Funktioniert nur in älteren Webpack-Setups                      |
| `new URL(..., import.meta.url)`    | ✅ Ja         | Dynamisch, kompatibel mit Vite                                  |

---

## 📁 Hinweis zu `public/`-Assets

Bilder im `public/`-Ordner kannst du direkt über relative Pfade einbinden:

```vue
<img src="/images/playing_jump.jpg" />
```

Aber:

- Diese Bilder werden **nicht** vom Build-Tool verarbeitet.
- Du bekommst **keine Cache-Busting-Dateinamen** (z. B. mit Hash).
- Weniger Kontrolle über den Output.

---
