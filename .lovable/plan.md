

## Förbättra UI för Tjänster- och Kontakt-sektionerna

Baserat på skärmbilden ser layouten lite "platt" och utspridd ut. Här är förbättringar:

### 1. ServicesSection — bättre kort-design
- Centrera sektionsrubriken
- Lägg till hover-effekt på korten (skugga + liten transform)
- Ge korten mer padding och en subtil border-färg
- Lägg till en ikon-placeholder (eller färgad prick) ovanför titeln för visuell variation

### 2. ContactSection — tightare layout
- Centrera rubriken
- Lägg till bakgrundscirklar/runda ikoner bakom ikonerna för bättre visuell balans
- Förbättra spacing mellan elementen
- Gör kontaktuppgifterna klickbara (mailto, tel)

### Filer som ändras
- `src/components/ServicesSection.tsx` — centrera rubrik, hover-effekter på kort
- `src/components/ContactSection.tsx` — centrera rubrik, runda ikon-bakgrunder, klickbara kontaktlänkar

Inga nya filer, komponenter eller konfigurationsändringar. Inga ändringar som påverkar routing eller GitHub Pages.

