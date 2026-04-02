

## Generera och sätt favicon

Sidan heter "Välkommen Hem" — jag genererar en enkel, stilren favicon (ett litet hus-ikon i SVG-format) och lägger den i `public/`.

### Steg 1: Skapa favicon
Generera en enkel SVG-favicon med ett hus-motiv i projektets primärfärg. Spara som `public/favicon.svg`.

### Steg 2: Uppdatera `index.html`
Lägg till en `<link rel="icon">` som pekar på `/favicon.svg`. Ta bort eventuell befintlig favicon-referens.

### Tekniska detaljer
- Favicon skapas som SVG (skalbart, litet, modernt)
- En `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` läggs till i `<head>`
- Ta bort `public/favicon.ico` om den finns, för att undvika att webbläsaren laddar den istället

