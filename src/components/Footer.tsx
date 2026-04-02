const Footer = () => (
  <footer className="border-t bg-muted/30 py-8">
    <div className="container flex flex-col items-center gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
      <p>&copy; {new Date().getFullYear()} [Företagsnamn]. Alla rättigheter förbehållna.</p>
      <div className="flex gap-6">
        <a href="#" className="transition-colors hover:text-foreground">Integritetspolicy</a>
        <a href="#" className="transition-colors hover:text-foreground">Villkor</a>
      </div>
    </div>
  </footer>
);

export default Footer;
