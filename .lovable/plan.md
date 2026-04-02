

## Fix: Preview slutar fungera pga `base`-path

### Problem
`vite.config.ts` har `base: "/v-lkommen-hem/"` hårdkodat. Detta gör att dev-servern (Lovable preview) försöker ladda assets från `/v-lkommen-hem/` istället för `/`, vilket ger en tom sida.

### Lösning
Sätt `base` villkorligt — bara i production-bygget:

**vite.config.ts** — ändra rad 8:
```ts
base: mode === "production" ? "/v-lkommen-hem/" : "/",
```

Detta gör att:
- **Preview (development)**: `base = "/"` → fungerar som vanligt
- **GitHub Pages build (production)**: `base = "/v-lkommen-hem/"` → assets laddas korrekt på subpathen

En enda rad ändras, inget annat påverkas.

