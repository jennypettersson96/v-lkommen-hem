import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="kontakt" className="py-20 scroll-mt-16">
    <div className="container max-w-4xl">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center">Kontakt</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">E-post</h3>
          <a href="mailto:info@example.se" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            info@example.se
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Telefon</h3>
          <a href="tel:+46000000000" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            +46 00 000 00 00
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Adress</h3>
          <p className="text-sm text-muted-foreground">[Gatuadress, Stad]</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
