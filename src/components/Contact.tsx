import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Võtke ühendust</h2>
          <p className="text-xl text-muted-foreground">
            Valmis alustama ehitusprojekti? Võtke ühendust juba täna!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefoninumber</h3>
              <a
                href="tel:+15551234567"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:erkehitus@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                erkehitus@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aadress</h3>
              <p className="text-muted-foreground">
                Keldrimäe tn 2<br />
                Tallinn, Kesklinn 10144
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Lahtiolekuajad</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Esmaspäev - Reede:</strong> 08:00 - 18:00</p>
                <p><strong>Laupäev:</strong> 09:00 - 16:00</p>
                <p><strong>Pühapäev:</strong> Kinni</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
