import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { title: "[Tjänst 1]", description: "[Kort beskrivning av tjänsten]" },
  { title: "[Tjänst 2]", description: "[Kort beskrivning av tjänsten]" },
  { title: "[Tjänst 3]", description: "[Kort beskrivning av tjänsten]" },
];

const ServicesSection = () => (
  <section id="tjanster" className="bg-muted/50 py-20 scroll-mt-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center">Tjänster</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card
            key={i}
            className="bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="p-8">
              <div className="mb-3 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{i + 1}</span>
              </div>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
