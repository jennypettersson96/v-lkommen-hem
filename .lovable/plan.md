

## Ta bort all Lovable-innehåll från index.html

### Ändring: `index.html`

Uppdatera eller ta bort alla meta-taggar som refererar till Lovable:

- **Rad 7**: Ändra `meta description` från "Lovable Generated Project" till en relevant beskrivning, t.ex. "Välkommen Hem"
- **Rad 8**: Ta bort `<meta name="author" content="Lovable" />` helt
- **Rad 11**: Ändra `og:description` från "Lovable Generated Project" till "Välkommen Hem"
- **Rad 13**: Ta bort `og:image` som pekar på `lovable.dev`
- **Rad 16**: Ta bort `twitter:site` med `@Lovable`
- **Rad 17**: Ta bort `twitter:image` som pekar på `lovable.dev`

Inga andra filer påverkas. Ingen påverkan på routing eller deploy.

