

## Rekommendation: HashRouter

För en enkel statisk site på GitHub Pages rekommenderar jag **HashRouter** — det är den enklaste och mest robusta lösningen.

### Varför?
- GitHub Pages serverar bara statiska filer och har inget stöd för SPA-routing
- HashRouter använder `#` i URL:en (t.ex. `site.com/#/about`) — detta kräver **inga workarounds** som `404.html`
- En enda rad ändras i koden

### Ändring

**`src/App.tsx`** — byt `BrowserRouter` till `HashRouter`:

```tsx
import { HashRouter, Route, Routes } from "react-router-dom";
// ...
<HashRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
```

Inget annat behöver ändras. Fungerar direkt i både Lovable-preview och GitHub Pages.

