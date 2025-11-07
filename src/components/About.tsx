import { Building2, Users, Award, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Märkimisväärne töö",
      description: "Kvaliteetne ehitus, kus iga detail on läbi mõeldud"
    },
    {
      icon: Users,
      title: "Kogenud Meeskond",
      description: "Spetsialistid, kellel on üle 25 aasta kogemust"
    },
    {
      icon: Award,
      title: "Registreeritud",
      description: "Oleme ametlikult registreeritud ettevõte"
    },
    {
      icon: Wrench,
      title: "Täisteenus",
      description: "Planeerimisest teostuseni - meie tegeleme kõigega"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ERK EHITUSEST</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oleme juhtiv ehitusettevõtte, mis on pühendunud erakordsete tulemuste pakkumisele. 
            Üle kahekümne aasta pikkuse kogemusega oleme loonud maine, kvaliteedi, usaldusväärsuse, 
            ja klientide rahulolu poolest. Elamutest kuni ärihooneteni - me viime Teie 
            visiooni ellu professionaalsuse ja asjatundlikkusega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">projekte tehtud</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">aastat kogemust</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">klientidest rahul</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">töölist</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
